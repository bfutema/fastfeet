export function createOrderRequest(recipientId, deliveryManId, name) {
  return {
    type: '@orders/CREATE_ORDER_REQUEST',
    payload: { recipientId, deliveryManId, name },
  };
}

export function createOrderSuccess(order) {
  return {
    type: '@orders/CREATE_ORDER_SUCCESS',
    payload: { order },
  };
}

export function createOrderFailure() {
  return {
    type: '@orders/CREATE_ORDER_FAILURE',
  };
}
