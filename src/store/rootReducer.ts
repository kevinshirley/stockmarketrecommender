import { combineReducers } from 'redux';

import stock from './reducers/stock';
import stocks from './reducers/stocks';

export default combineReducers({
  stock,
  stocks,
});
