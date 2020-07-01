import Order from '../models/Order';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async store(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(401).json({ error: 'Order not found!' });
    }

    const deliveryProblem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: id,
    });

    return res.json(deliveryProblem);
  }
}

export default new DeliveryProblemController();
