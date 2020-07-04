import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import DeliveryMan from '../models/DeliveryMan';
import Recipient from '../models/Recipient';
import DeliveryProblem from '../models/DeliveryProblem';

import CancellationOrderDeliveryMail from '../jobs/CancellationOrderDeliveryMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async list(req, res) {
    const { page = 1 } = req.query;

    let orders = await DeliveryProblem.findAll({
      order: [['id', 'DESC']],
      attributes: ['id', 'description', 'created_at', 'updated_at'],
      limit: 8,
      offset: (page - 1) * 8,
      include: [
        {
          model: Order,
          as: 'order',
        },
      ],
    });

    orders = orders.map((orderWithProblem) => {
      const { id, description, createdAt, updatedAt, order } = orderWithProblem;

      return {
        id,
        idStr: String(orderWithProblem.id).padStart(2, '00'),
        description,
        createdAt,
        updatedAt,
        order: {
          id: order.id,
          product: order.product,
          cancelled_at: order.cancelled_at,
          start_date: order.start_date,
          end_date: order.end_date,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
          recipient_id: order.recipient_id,
          deliveryman_id: order.deliveryman_id,
          signature_id: order.signature_id,
        },
      };
    });

    return res.json(orders);
  }

  async index(req, res) {
    const { id } = req.params;

    const orders = await DeliveryProblem.findAll({
      include: [
        {
          model: Order,
          as: 'order',
          where: { id, start_date: { [Op.not]: null } },
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { id } = req.params;
    const { deliveryman_id } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(401).json({ error: 'Order not found!' });
    }

    if (order.deliveryman_id !== deliveryman_id) {
      return res.status(401).json({
        error:
          'You cannot register a problem with an order that is not associated with you!',
      });
    }

    if (order.start_date === null) {
      return res.status(401).json({
        error: 'You cannot register a problem for an not withdraw order!',
      });
    }

    const deliveryProblem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: id,
    });

    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const { problem_id } = req.params;

    const problem = await DeliveryProblem.findByPk(problem_id);

    if (!problem) {
      return res.status(401).json({
        error:
          'Cancellation of a delivery is not permitted without due problem!',
        problem,
      });
    }

    const order = await Order.findByPk(problem.delivery_id);

    await order.update({ cancelled_at: new Date() });

    const deliveryMan = await DeliveryMan.findByPk(order.deliveryman_id);
    const recipient = await Recipient.findByPk(order.recipient_id);

    await Queue.add(CancellationOrderDeliveryMail.key, {
      deliveryMan,
      recipient,
      order,
    });

    return res.json();
  }
}

export default new DeliveryProblemController();
