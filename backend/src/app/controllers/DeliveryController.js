import * as Yup from 'yup';
import { getHours, setHours, setMinutes, setSeconds, subHours } from 'date-fns';
import { Op } from 'sequelize';
import Order from '../models/Order';

class DeliveryController {
  async index(req, res) {
    const { deliveryman_id } = req.params;
    const { delivered } = req.query;

    if (delivered) {
      const delivers = await Order.findAll({
        order: [['created_at', 'DESC']],
        where: {
          deliveryman_id,
          cancelled_at: null,
          end_date: { [Op.not]: null },
        },
      });

      return res.json(delivers);
    }

    const delivers = await Order.findAll({
      order: [['created_at', 'DESC']],
      where: { deliveryman_id, cancelled_at: null, end_date: null },
    });

    return res.json(delivers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      order_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { deliveryman_id } = req.params;
    const { order_id } = req.body;

    const hour = getHours(new Date());

    if (!(hour >= 8 && hour < 18)) {
      return res.status(401).json({
        error: 'You cannot pick up an order outside the allowed hours!',
      });
    }

    const initialHourOfDay = subHours(
      setHours(setMinutes(setSeconds(new Date(), 0), 0), 0),
      3
    );
    const finalHourOfDay = subHours(
      setHours(setMinutes(setSeconds(new Date(), 59), 59), 23),
      3
    );

    const ordersByDeliveryMan = await Order.findAll({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [initialHourOfDay, finalHourOfDay],
        },
      },
    });

    if (ordersByDeliveryMan.length >= 5) {
      return res
        .status(401)
        .json({ error: 'You cannot make more than 5 deliveries per day!' });
    }

    const delivery = await Order.findOne({
      where: {
        id: order_id,
        cancelled_at: null,
        start_date: null,
        end_date: null,
      },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Order not found!' });
    }

    if (delivery.deliveryman_id !== Number(deliveryman_id)) {
      return res.status(401).json({
        error: 'You cannot withdraw an order that are not associated with you!',
      });
    }

    const {
      id,
      product,
      cancelled_at,
      start_date,
      end_date,
      createdAt,
      updatedAt,
      recipient_id,
      signature_id,
    } = await delivery.update({
      start_date: new Date(),
    });

    return res.json({
      id,
      product,
      cancelled_at,
      start_date,
      end_date,
      createdAt,
      updatedAt,
      recipient_id,
      signature_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { deliveryman_id, id: order_id } = req.params;
    const { signature_id } = req.body;

    const delivery = await Order.findOne({
      where: {
        id: order_id,
        cancelled_at: null,
      },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Order not found!' });
    }

    if (delivery.start_date === null) {
      return res
        .status(401)
        .json({ error: 'This order has not yet been withdraw!' });
    }

    if (delivery.deliveryman_id !== Number(deliveryman_id)) {
      return res.status(401).json({
        error: 'You cannot deliver an order that is not associated with you!',
      });
    }

    const {
      id,
      product,
      cancelled_at,
      start_date,
      end_date,
      createdAt,
      updatedAt,
      recipient_id,
    } = await delivery.update({
      end_date: new Date(),
      signature_id,
    });

    return res.json({
      id,
      product,
      cancelled_at,
      start_date,
      end_date,
      createdAt,
      updatedAt,
      recipient_id,
      signature_id,
    });
  }
}

export default new DeliveryController();
