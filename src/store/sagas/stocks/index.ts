// import AppRouter from 'next/router';
import { put, takeLatest, call } from 'redux-saga/effects';
import { STOCKS } from '../../actions';
import { API_ROUTE } from '../../constants/api';
import { post } from '../../../utils/fetch';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export function* watchGetCompanyProfile() {
  yield takeLatest(STOCKS.GET_COMPANY_PROFILE, getCompanyProfile);
}

function* getCompanyProfile({ payload }: any) {
  const { symbol } = payload;

  const stockCompanyProfileResult: ResponseGenerator = yield call<any>(post, API_ROUTE.GET_STOCK_COMPANY_PROFILE, { symbol });

  console.log({ stockCompanyProfileResult });
}
