export function createOrderRequest(recipientId, deliveryManId, name) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_REQUEST',
    payload: { recipientId, deliveryManId, name },
  };
}

export function createOrderSuccess(deliveryman) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}

export function createOrderFailure() {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_FAILURE',
  };
}

export function updateOrderRequest(id, recipientId, deliveryManId, product) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_REQUEST',
    payload: { id, recipientId, deliveryManId, product },
  };
}

export function updateOrderSuccess(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}

export function updateOrderFailure() {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_FAILURE',
  };
}

export function listOrdersRequest(page, q) {
  return {
    type: '@deliveryman/LIST_DELIVERYMANS_REQUEST',
    payload: { page, q },
  };
}

export function listOrdersSuccess(deliverymans) {
  return {
    type: '@deliveryman/LIST_DELIVERYMANS_SUCCESS',
    payload: { deliverymans },
  };
}

export function listOrdersFailure() {
  return {
    type: '@deliveryman/LIST_DELIVERYMANS_FAILURE',
  };
}

export function deleteOrderRequest(id) {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_REQUEST',
    payload: { id },
  };
}

export function deleteOrderSuccess() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_SUCCESS',
  };
}

export function deleteOrderFailure() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_FAILURE',
  };
}
