import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import order from './order/reducer';
import recipient from './recipient/reducer';
import deliveryman from './deliveryman/reducer';

export default combineReducers({
  auth,
  user,
  order,
  recipient,
  deliveryman,
});
