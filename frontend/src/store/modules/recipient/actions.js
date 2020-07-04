export function createRecipientRequest(
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/CREATE_RECIPIENT_REQUEST',
    payload: { name, street, number, complement, city, state, zip },
  };
}

export function createRecipientSuccess(recipient) {
  return {
    type: '@recipient/CREATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}

export function createRecipientFailure() {
  return {
    type: '@recipient/CREATE_RECIPIENT_FAILURE',
  };
}

export function updateRecipientRequest(
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_REQUEST',
    payload: { id, name, street, number, complement, city, state, zip },
  };
}

export function updateRecipientSuccess(recipient) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}

export function updateRecipientFailure() {
  return {
    type: '@recipient/UPDATE_RECIPIENT_FAILURE',
  };
}

export function deleteRecipientRequest(id) {
  return {
    type: '@recipient/DELETE_RECIPIENT_REQUEST',
    payload: { id },
  };
}

export function deleteRecipientSuccess() {
  return {
    type: '@recipient/DELETE_RECIPIENT_SUCCESS',
  };
}

export function deleteRecipientFailure() {
  return {
    type: '@recipient/DELETE_RECIPIENT_FAILURE',
  };
}
