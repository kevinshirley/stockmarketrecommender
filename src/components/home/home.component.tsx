import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Search from '../common/search';
import { useAction } from '../../store/hooks';
import * as actions from '../../store/actions';
import { selectStockCompanyProfile } from '../../store/selectors/stock';

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

const BEM_BLOCK = 'c-home';

function HomeContainer() {
  const getStockCompanyProfile = useAction(actions.stocks.getCompanyProfile);

  const stockCompanyProfile: IStockCompanyProfile = useSelector(selectStockCompanyProfile);

  useEffect(() => {
    getStockCompanyProfile({ symbol: 'TSLA' });
  }, []);

  const onSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // onCustomersSearch({ value: e.target.value });
    console.log({ searchValue: e.target.value });
  };

  return (
    <div className={BEM_BLOCK}>
      <div className={`${BEM_BLOCK}__search-stocks`}>
        <div className={`${BEM_BLOCK}__search-wrapper`}>
          <Search
            onChange={onSearchChanged}
            placeholder='Search stocks'
          />
        </div>
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
        <div className={`${BEM_BLOCK}__detail ${BEM_BLOCK}__stock-price-details`}>
          <div className={`${BEM_BLOCK}__content`}>
            <h2>854.6</h2>
            <p>-35.95(-6.46%)</p>
            <p>2022-08-28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
