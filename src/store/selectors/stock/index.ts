import * as R from 'ramda';

export const selectStockCompanyProfile = R.pathOr({}, [
  'stock',
  'companyProfile',
]);