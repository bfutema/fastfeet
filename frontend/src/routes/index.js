import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import SaveDeliveryMan from '../pages/DeliveryMan/Save';
import DeliveryMans from '../pages/DeliveryMan/List';
import SaveOrder from '../pages/Order/Save';
import Orders from '../pages/Order/List';
import SaveRecipient from '../pages/Recipient/Save';
import Recipients from '../pages/Recipient/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/save/deliveryman" component={SaveDeliveryMan} />
      <Route path="/deliverymans" component={DeliveryMans} />

      <Route path="/save/order" component={SaveOrder} />
      <Route path="/orders" component={Orders} />

      <Route path="/save/recipient" component={SaveRecipient} />
      <Route path="/recipients" component={Recipients} />
    </Switch>
  );
}
