import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { 
  watchGetCompanyProfile,
  watchGetStockSymbols,
} from '../store/sagas/stocks';

function* rootSaga() {
  yield all([
    watchGetCompanyProfile(),
    watchGetStockSymbols(),
  ]);
}

export default rootSaga;
