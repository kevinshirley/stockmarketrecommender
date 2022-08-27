import React from 'react';

const BEM_BLOCK = 'c-header';

function Header() {
  return (
    <header className={BEM_BLOCK}>
      <h1>Stock Market Recommender</h1>
    </header>
  );
};

export default Header;
