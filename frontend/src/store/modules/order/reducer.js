import produce from 'immer';

const INITIAL_STATE = {
  order: {},
  orders: [],
  loading: false,
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@order/CREATE_ORDER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/CREATE_ORDER_SUCCESS': {
        draft.orders = [...state.orders, action.payload.order];
        draft.loading = false;
        break;
      }
      case '@order/CREATE_ORDER_FAILURE': {
        draft.order = action.payload.order;
        draft.loading = false;
        break;
      }
      case '@order/UPDATE_ORDER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/UPDATE_ORDER_SUCCESS': {
        draft.orders = [...state.orders, action.payload.order];
        draft.loading = false;
        break;
      }
      case '@order/UPDATE_ORDER_FAILURE': {
        draft.order = action.payload.order;
        draft.loading = false;
        break;
      }
      case '@order/DELETE_ORDERS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@order/DELETE_ORDERS_SUCCESS': {
        draft.loading = false;
        draft.orders = action.payload.orders;
        break;
      }
      case '@order/DELETE_ORDERS_FAILURE': {
        draft.orders = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
