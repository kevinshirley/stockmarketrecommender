import React from 'react';

const BEM_BLOCK = 'c-header';

function Header() {
  return (
    <div className={BEM_BLOCK}>
      <h1>Stock Market Recommender</h1>
    </div>
  );
};

export default Header;
