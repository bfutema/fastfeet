import produce from 'immer';

const INITIAL_STATE = {
  deliveryMan: {},
  deliveryMans: [],
  loading: false,
};

export default function deliveryMans(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/CREATE_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/CREATE_DELIVERYMAN_SUCCESS': {
        draft.deliveryMans = [
          ...state.deliveryMans,
          action.payload.deliveryMan,
        ];
        draft.loading = false;
        break;
      }
      case '@deliveryman/CREATE_DELIVERYMAN_FAILURE': {
        draft.deliveryMan = action.payload.deliveryMan;
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS': {
        draft.deliveryMans = [
          ...state.deliveryMans,
          action.payload.deliveryMan,
        ];
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_FAILURE': {
        draft.deliveryMan = action.payload.deliveryMan;
        draft.loading = false;
        break;
      }
      case '@deliveryman/DELETE_DELIVERYMANS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/DELETE_DELIVERYMANS_SUCCESS': {
        draft.loading = false;
        draft.deliveryMans = action.payload.deliveryMans;
        break;
      }
      case '@deliveryman/DELETE_DELIVERYMANS_FAILURE': {
        draft.deliveryMans = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
