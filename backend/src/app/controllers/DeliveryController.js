import * as Yup from 'yup';
import { getHours, setHours, setMinutes, setSeconds, subHours } from 'date-fns';
import { Op } from 'sequelize';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import DeliveryMan from '../models/DeliveryMan';

class DeliveryController {
  async index(req, res) {
    const { deliveryman_id } = req.params;
    const { delivered, page = 1 } = req.query;

    if (delivered) {
      const delivers = await Order.findAll({
        order: [['created_at', 'DESC']],
        where: {
          deliveryman_id,
          cancelled_at: null,
          end_date: { [Op.not]: null },
        },
        limit: 8,
        offset: (page - 1) * 8,
        include: [
          {
            model: Recipient,
            as: 'recipient',
          },
          {
            model: DeliveryMan,
            as: 'deliveryman',
          },
        ],
      });

      // delivers = delivers.map((deliveryMan) => {
      //   const split = deliveryMan.name.split(' ');
      //   const initialLetters = `${split[0].slice(0, 1)}${split[
      //     split.length - 1
      //   ].slice(0, 1)}`.toUpperCase();

      //   const { id, name, email, avatar } = deliveryMan;

      //   return {
      //     id,
      //     idStr: String(deliveryMan.id).padStart(2, '00'),
      //     name,
      //     initialLetters,
      //     email,
      //     avatar,
      //   };
      // });

      return res.json(delivers);
    }

    let delivers = await Order.findAll({
      order: [['created_at', 'DESC']],
      where: { deliveryman_id, cancelled_at: null, end_date: null },
      limit: 8,
      offset: (page - 1) * 8,
      include: [
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: DeliveryMan,
          as: 'deliveryman',
        },
      ],
    });

    delivers = delivers.map((order) => {
      const split = order.deliveryman.name.split(' ');
      const initialLetters = `${split[0].slice(0, 1)}${split[
        split.length - 1
      ].slice(0, 1)}`.toUpperCase();

      const {
        id,
        product,
        cancelled_at,
        start_date,
        end_date,
        createdAt,
        updatedAt,
        recipient,
      } = order;
      const { deliveryManId, name, email, avatar } = order.deliveryman;

      return {
        id,
        product,
        cancelled_at,
        start_date,
        end_date,
        createdAt,
        updatedAt,
        recipient,
        deliveryman: {
          id: deliveryManId,
          idStr: String(deliveryManId).padStart(2, '00'),
          name,
          initialLetters,
          email,
          avatar,
        },
        signature_id: null,
      };
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
    console.log(req.body);
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
