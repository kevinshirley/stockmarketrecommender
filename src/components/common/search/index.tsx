import React from 'react';
import { SEARCH_ICON } from '../icons';
import InputField from '../input';

interface ISearch {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
}

const BEM_BLOCK = 'c-search';

function Search({ onChange = () => {}, onClick = () => {}, placeholder = 'Search' }: ISearch) {
  return (
    <div className={BEM_BLOCK}>
      <div className={`${BEM_BLOCK}__icon`} onClick={onClick}>
        {SEARCH_ICON}
      </div>
      <InputField
        ariaLabel='search'
        className={`${BEM_BLOCK}__field`}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
