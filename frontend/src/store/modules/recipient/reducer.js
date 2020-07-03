import produce from 'immer';

const INITIAL_STATE = {
  recipient: {},
  recipients: [],
  loading: false,
};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/CREATE_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/CREATE_RECIPIENT_SUCCESS': {
        draft.recipients = [...state.recipients, action.payload.recipient];
        draft.loading = false;
        break;
      }
      case '@recipient/CREATE_RECIPIENT_FAILURE': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
