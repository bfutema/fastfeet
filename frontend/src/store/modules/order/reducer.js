import produce from 'immer';

const INITIAL_STATE = {
  order: {},
  orders: [],
  loading: false,
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@orders/CREATE_ORDER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@orders/CREATE_ORDER_SUCCESS': {
        draft.orders = [...state.orders, action.payload.order];
        draft.loading = false;
        break;
      }
      case '@orders/CREATE_ORDER_FAILURE': {
        draft.order = action.payload.order;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
