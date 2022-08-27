import React from 'react';

const BEM_BLOCK = 'c-home';

function HomeContainer() {
  return (
    <div className={BEM_BLOCK}>
      <div>
        home container
      </div>
      <button className={`${BEM_BLOCK}__btn-one`}>First</button>
      <button className={`${BEM_BLOCK}__btn-two`}>Second</button>
    </div>
  );
};

export default HomeContainer;
