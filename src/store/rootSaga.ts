import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { 
  watchGetCompanyProfile,
} from '../store/sagas/stocks';

function* rootSaga() {
  yield all([
    watchGetCompanyProfile(),
  ]);
}

export default rootSaga;
