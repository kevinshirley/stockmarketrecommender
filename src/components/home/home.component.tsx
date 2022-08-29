import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toUpper, isEmpty, isNil } from 'ramda';
import { useAction } from '../../store/hooks';
import * as actions from '../../store/actions';
import { selectStockCompanyProfile } from '../../store/selectors/stock';
import { selectSearchInputResults } from '../../store/selectors/stock';
import Search from '../common/search';
import Button from '../common/button';

interface IStockCompanyProfile {
  country?: string;
  currency?: string;
  exchange?: string;
  finnhubIndustry?: string;
  ipo?: string;
  logo?: string;
  marketCapitalization?: number;
  name?: string;
  phone?: string;
  shareOutstanding?: number;
  ticker?: string;
  weburl?: string;
}

interface ISymbolItem {
  cik_str: number;
  ticker: string;
  title: string;
}

const BEM_BLOCK = 'c-home';

function HomeContainer() {
  const getStockCompanyProfile = useAction(actions.stocks.getCompanyProfile);
  const resetStockCompanyProfile = useAction(actions.stocks.resetCompanyProfile);
  const onSymbolInputResults = useAction(actions.stocks.symbolInputResults);
  const resetSearchInputResults = useAction(actions.stocks.resetSearchInputResults);

  const stockCompanyProfile: IStockCompanyProfile = useSelector(selectStockCompanyProfile);
  const searchInputResults: ISymbolItem[] = useSelector(selectSearchInputResults);
  console.log({ searchInputResults });

  const [symbolInput, setSymbolInput] = useState('');

  const onSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const symbolToUpper = toUpper(e.target.value);
    setSymbolInput(symbolToUpper);
    onSymbolInputResults({ symbol: symbolToUpper });
  };

  const onSearchClick = (value: string) => {
    let searchValue;

    if (!isEmpty(value) && !isNil(value)) {
      searchValue = value;
    } else {
      searchValue = symbolInput;
    }

    if (!isEmpty(searchValue) && !isNil(searchValue)) {
      getStockCompanyProfile({ symbol: searchValue });
      resetSearchInputResults();
    }
  };

  const onSearchReset = () => {
    resetStockCompanyProfile();
    setSymbolInput('');
  };

  return (
    <div className={BEM_BLOCK}>
      <div className={`${BEM_BLOCK}__search-stocks`}>
        <div className={`${BEM_BLOCK}__search-wrapper`}>
          <Search
            onChange={onSearchChanged}
            onClick={onSearchClick}
            onReset={onSearchReset}
            placeholder='Search stocks'
            value={symbolInput}
          />
        </div>
        {!isEmpty(searchInputResults) && !isNil(searchInputResults) && (
          <div className={`${BEM_BLOCK}__search-input-results`}>
            {searchInputResults && searchInputResults.map((input: ISymbolItem, i: number) => (
              <Button
                key={i}
                className={`${BEM_BLOCK}__search-input-result`}
                onClick={() => onSearchClick(input.ticker)}
              >
                {input.ticker} - {input.title}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className={`${BEM_BLOCK}__stock-details`}>
        {stockCompanyProfile && (
          <div className={`${BEM_BLOCK}__detail ${BEM_BLOCK}__stock-name`}>
            <div className={`${BEM_BLOCK}__content`}>
              {stockCompanyProfile.ticker && (
                <h2>{stockCompanyProfile.ticker}</h2>
              )}
              {stockCompanyProfile.name && (
                <p>{stockCompanyProfile.name}</p>
              )}
              {stockCompanyProfile.exchange && (
                <p>{stockCompanyProfile.exchange}</p>
              )}
            </div>
          </div>
        )}
        {stockCompanyProfile && stockCompanyProfile.logo && (
          <div className={`${BEM_BLOCK}__detail ${BEM_BLOCK}__stock-logo`}>
            <div className={`${BEM_BLOCK}__content`}>
              <img
                src={stockCompanyProfile.logo}
                alt={stockCompanyProfile.name}
              />
            </div>
          </div>
        )}
        {!isEmpty(stockCompanyProfile) && (
          <div className={`${BEM_BLOCK}__detail ${BEM_BLOCK}__stock-price-details`}>
            <div className={`${BEM_BLOCK}__content`}>
              <h2>854.6</h2>
              <p>-35.95(-6.46%)</p>
              <p>2022-08-28</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
