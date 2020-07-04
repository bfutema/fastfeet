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

export function listOrdersRequest(page, q) {
  return {
    type: '@order/LIST_ORDERS_REQUEST',
    payload: { page, q },
  };
}

export function listOrdersSuccess(orders) {
  return {
    type: '@order/LIST_ORDERS_SUCCESS',
    payload: { orders },
  };
}

export function listOrdersFailure() {
  return {
    type: '@order/LIST_ORDERS_FAILURE',
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
