export function createOrderRequest(recipientId, deliveryManId, name) {
  return {
    type: '@order/CREATE_ORDER_REQUEST',
    payload: { recipientId, deliveryManId, name },
  };
}

export function createOrderSuccess(order) {
  return {
    type: '@order/CREATE_ORDER_SUCCESS',
    payload: { order },
  };
}

export function createOrderFailure() {
  return {
    type: '@order/CREATE_ORDER_FAILURE',
  };
}

export function updateOrderRequest(id, recipientId, deliveryManId, product) {
  return {
    type: '@order/UPDATE_ORDER_REQUEST',
    payload: { id, recipientId, deliveryManId, product },
  };
}

export function updateOrderSuccess(order) {
  return {
    type: '@order/UPDATE_ORDER_SUCCESS',
    payload: { order },
  };
}

export function updateOrderFailure() {
  return {
    type: '@order/UPDATE_ORDER_FAILURE',
  };
}

export function deleteOrderRequest(id) {
  return {
    type: '@order/DELETE_ORDER_REQUEST',
    payload: { id },
  };
}

export function deleteOrderSuccess() {
  return {
    type: '@order/DELETE_ORDER_SUCCESS',
  };
}

export function deleteOrderFailure() {
  return {
    type: '@order/DELETE_ORDER_FAILURE',
  };
}

export function cancelOrderRequest(problemId) {
  return {
    type: '@order/CANCEL_ORDER_REQUEST',
    payload: { problemId },
  };
}

export function cancelOrderSuccess() {
  return {
    type: '@order/CANCEL_ORDER_SUCCESS',
  };
}

export function cancelOrderFailure() {
  return {
    type: '@order/CANCEL_ORDER_FAILURE',
  };
}
