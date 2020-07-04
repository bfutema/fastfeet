export function signInRequest(deliveryManId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { deliveryManId },
  };
}

export function signInSuccess(token, deliveryman) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, deliveryman },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
