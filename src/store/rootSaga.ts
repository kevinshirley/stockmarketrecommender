import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { 
  watchGetCompanyProfile,
  watchGetStockSymbols,
  watchSymbolInputResults,
} from '../store/sagas/stocks';

function* rootSaga() {
  yield all([
    watchGetCompanyProfile(),
    watchGetStockSymbols(),
    watchSymbolInputResults(),
  ]);
}

export default rootSaga;
