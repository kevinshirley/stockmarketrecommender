import React from 'react';
import { SEARCH_ICON } from '../icons';
import InputField from '../input';

interface ISearch {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
  value?: string;
}

const BEM_BLOCK = 'c-search';

function Search({
  onChange = () => {},
  onClick = () => {},
  placeholder = 'Search',
  value = '',
}: ISearch) {
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
        value={value}
      />
    </div>
  );
}

export default Search;
