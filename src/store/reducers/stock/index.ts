import { STOCKS } from '../../actions';

const initialState = {
  companyProfile: {},
};

const StockReducer = (state = initialState, { type, payload }: { type: string; payload: any }) => {
  switch (type) {
    case STOCKS.SET_COMPANY_PROFILE:
      return {
        ...state,
        companyProfile: {
          ...payload,
        },
      };
    case STOCKS.RESET_COMPANY_PROFILE:
      return {
        ...state,
        companyProfile: {},
      };
    default:
      return state;
  }
}

export default StockReducer;
