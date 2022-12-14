// @ts-nocheck
import { put, takeLatest, call, select } from 'redux-saga/effects';
import { isNil, isEmpty, map, includes, filter } from 'ramda';
import { STOCKS, stocks, ROOT } from '../../actions';
import { API_ROUTE } from '../../constants/api';
import { post, get } from '../../../utils/fetch';
import { selectStockSymbols } from '../../selectors/stocks';

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

export function* watchSymbolInputResults() {
  yield takeLatest(STOCKS.SYMBOL_INPUT_RESULTS, symbolInputResults);
}

export function* watchStockMarketNews() {
  yield takeLatest(ROOT.INITIAL_LOAD, stockMarketNews);
}

function* getCompanyProfile({ payload }: any) {
  try {
    const { symbol } = payload;

    const stockCompanyProfileResult: ResponseGenerator = yield call<any>(post, API_ROUTE.GET_STOCK_COMPANY_PROFILE, { symbol });
    const stockQuoteResult: ResponseGenerator = yield call<any>(post, API_ROUTE.GET_STOCK_QUOTE, { symbol });

    let stockSocialCountResult: ResponseGenerator | number = 0;

    if (stockCompanyProfileResult && stockCompanyProfileResult.name) {
      stockSocialCountResult = yield call<any>(post, API_ROUTE.GET_SOCIAL_COUNT, { symbol: stockCompanyProfileResult.name });
    }

    if (!isEmpty(stockCompanyProfileResult) && !isNil(stockCompanyProfileResult) && !isEmpty(stockQuoteResult) && !isNil(stockQuoteResult)) {
      yield put(stocks.setCompanyProfile({
        ...stockCompanyProfileResult,
        quote: stockQuoteResult,
        socialCount: stockSocialCountResult || 0,
      }));
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

function* symbolInputResults({ payload }: any) {
  try {
    const { symbol } = payload;

    if (!isNil(symbol) && !isEmpty(symbol)) {
      const stockSymbols: ResponseGenerator = yield select<any>(selectStockSymbols);
      const stockSymbolTickers: string[] = map((stock: {
        cik_str: number;
        ticker: string;
        title: string;
      }) => stock.ticker, stockSymbols);

      const inputResults = stockSymbolTickers.filter((ticker: any) => includes(symbol, ticker));

      const searchInputResults = filter<any>((stock: {
        cik_str: number;
        ticker: string;
        title: string;
      }) => includes(stock.ticker, inputResults), stockSymbols);

      yield put(stocks.setSearchInputResults(searchInputResults));
    } else {
      yield put(stocks.setSearchInputResults([]));
    }
  } catch(error) {
    console.log('try/catch error in getStockSymbols saga: ', error);
  }
}

function* stockMarketNews() {
  try {
    const stockMarketNewsResult: ResponseGenerator = yield call<any>(get, API_ROUTE.GET_STOCK_MARKET_NEWS);

    if (!isEmpty(stockMarketNewsResult) && !isNil(stockMarketNewsResult)) {
      yield put(stocks.setMarketNews(stockMarketNewsResult));
    } else {
      console.log('No stock market news available');
    }
  } catch(error) {
    console.log('try/catch error in stockMarketNews saga');
  }
}
