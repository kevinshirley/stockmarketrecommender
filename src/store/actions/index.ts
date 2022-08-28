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

export const STOCKS = createTypes('STOCKS', [
  'GET_COMPANY_PROFILE',
  'SET_COMPANY_PROFILE',
  'RESET_COMPANY_PROFILE',
]);

export const stocks = {
  getCompanyProfile: (payload: { symbol: string }) => action(STOCKS.GET_COMPANY_PROFILE, payload),
  setCompanyProfile: (payload: any) => action(STOCKS.SET_COMPANY_PROFILE, payload),
  resetCompanyProfile: () => action(STOCKS.RESET_COMPANY_PROFILE),
};
