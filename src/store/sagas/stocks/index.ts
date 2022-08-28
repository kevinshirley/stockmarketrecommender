import AppRouter from 'next/router';
import { put, takeLatest } from 'redux-saga/effects';
import { STOCKS } from '../../actions';

export function* watchGetCompanyProfile() {
  yield takeLatest(STOCKS.GET_COMPANY_PROFILE, getCompanyProfile);
}

function* getCompanyProfile() {
  console.log('getCompanyProfile saga');
}
