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
      case '@recipient/UPDATE_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/UPDATE_RECIPIENT_SUCCESS': {
        draft.recipients = [...state.recipients, action.payload.recipient];
        draft.loading = false;
        break;
      }
      case '@recipient/UPDATE_RECIPIENT_FAILURE': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@recipient/LIST_RECIPIENTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/LIST_RECIPIENTS_SUCCESS': {
        draft.loading = false;
        draft.recipients = action.payload.recipients;
        break;
      }
      case '@recipient/LIST_RECIPIENTS_FAILURE': {
        draft.recipients = [];
        draft.loading = false;
        break;
      }
      case '@recipient/DELETE_RECIPIENTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/DELETE_RECIPIENTS_SUCCESS': {
        draft.loading = false;
        draft.recipients = action.payload.recipients;
        break;
      }
      case '@recipient/DELETE_RECIPIENTS_FAILURE': {
        draft.recipients = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
