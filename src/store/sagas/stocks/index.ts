// import AppRouter from 'next/router';
import { put, takeLatest, call } from 'redux-saga/effects';
import { isNil, isEmpty } from 'ramda';
import { STOCKS, stocks, ROOT } from '../../actions';
import { API_ROUTE } from '../../constants/api';
import { post, get } from '../../../utils/fetch';
import { symbols } from '../../constants/stock-symbols';

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

export function* watchGetStockSymbols() {
  yield takeLatest(ROOT.INITIAL_LOAD, getStockSymbols);
}

function* getCompanyProfile({ payload }: any) {
  try {
    const { symbol } = payload;

    const stockCompanyProfileResult: ResponseGenerator = yield call<any>(post, API_ROUTE.GET_STOCK_COMPANY_PROFILE, { symbol });

    if (!isEmpty(stockCompanyProfileResult) && !isNil(stockCompanyProfileResult)) {
      yield put(stocks.setCompanyProfile(stockCompanyProfileResult));
    } else {
      console.log('No stock company data returned');
    }
  } catch(error) {
    console.log('try/catch error in getCompanyProfile saga');
  }
}

function* getStockSymbols() {
  try {
    const stockSymbolsResult: ResponseGenerator = yield call<any>(get, API_ROUTE.GET_STOCK_SYMBOLS);

    if (!isEmpty(stockSymbolsResult) && !isNil(stockSymbolsResult)) {
      yield put(stocks.setStockSymbols(stockSymbolsResult));
    } else {
      console.log('No able to get stock symbols');
    }
  } catch(error) {
    console.log('try/catch error in getStockSymbols saga');
  }
}
