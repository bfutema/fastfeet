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
