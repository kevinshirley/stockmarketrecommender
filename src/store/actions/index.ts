export function createTypes(base: string, types: string[]) {
  const res: any = {};
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const action = (type: string, payload = {}, meta = {}) => ({
  type,
  payload,
  meta,
});

export const actionWithoutStoreUpdate = (type: string, payload = {}, meta = {}) => ({
  type,
  payload,
  meta,
  shouldNotUpdateStore: true,
});

export const ROOT = createTypes('ROOT', [
  'INITIAL_LOAD',
]);

export const STOCKS = createTypes('STOCKS', [
  'GET_COMPANY_PROFILE',
  'SET_COMPANY_PROFILE',
  'RESET_COMPANY_PROFILE',
  'SET_STOCK_SYMBOLS',
]);

export const root = {
  initialLoad: (params: any) => actionWithoutStoreUpdate(ROOT.INITIAL_LOAD, { params }),
};

export const stocks = {
  getCompanyProfile: (payload: { symbol: string }) => action(STOCKS.GET_COMPANY_PROFILE, payload),
  setCompanyProfile: (payload: any) => action(STOCKS.SET_COMPANY_PROFILE, payload),
  resetCompanyProfile: () => action(STOCKS.RESET_COMPANY_PROFILE),
  setStockSymbols: (payload: any) => action(STOCKS.SET_STOCK_SYMBOLS, payload),
};
