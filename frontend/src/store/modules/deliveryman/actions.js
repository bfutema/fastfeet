export function createDeliveryManRequest(name, email, avatarId) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_REQUEST',
    payload: { name, email, avatarId },
  };
}

export function createDeliveryManSuccess(deliveryman) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}

export function createDeliveryManFailure() {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_FAILURE',
  };
}

export function updateDeliveryManRequest(id, name, email, avatarId) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_REQUEST',
    payload: { id, name, email, avatarId },
  };
}

export function updateDeliveryManSuccess(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}

export function updateDeliveryManFailure() {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_FAILURE',
  };
}

export function deleteDeliveryManRequest(id) {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_REQUEST',
    payload: { id },
  };
}

export function deleteDeliveryManSuccess() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_SUCCESS',
  };
}

export function deleteDeliveryManFailure() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_FAILURE',
  };
}
