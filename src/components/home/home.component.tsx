import React, { useEffect } from 'react';
import Search from '../common/search';
import { useAction } from '../../store/hooks';
import * as actions from '../../store/actions';

const BEM_BLOCK = 'c-home';

function HomeContainer() {
  const getStockCompanyProfile = useAction(actions.stocks.getCompanyProfile);

  useEffect(() => {
    getStockCompanyProfile();
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
    </div>
  );
};

export default HomeContainer;
