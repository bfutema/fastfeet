import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import DeliveryMan from '../models/DeliveryMan';
import File from '../models/File';

import NewOrderDeliveryMail from '../jobs/NewOrderDeliveryMail';
import Queue from '../../lib/Queue';

class OrderController {
  async index(req, res) {
    const { id: orderId } = req.params;
    const { page = 1, q = '', pagination } = req.query;

    const total = await Order.count();

    let query = {};

    if (pagination === 'true') {
      if (orderId) {
        query = {
          where: { id: orderId, product: { [Op.iLike]: `%${q}%` } },
          order: [['id', 'DESC']],
          attributes: [
            'id',
            'product',
            'cancelled_at',
            'start_date',
            'end_date',
          ],
          limit: 8,
          offset: (page - 1) * 8,
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'id',
                'name',
                'street',
                'number',
                'complement',
                'state',
                'city',
                'zip',
              ],
            },
            {
              model: DeliveryMan,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email'],
            },
            {
              model: File,
              as: 'signature',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        };
      } else {
        query = {
          where: { product: { [Op.iLike]: `%${q}%` } },
          order: [['id', 'DESC']],
          attributes: [
            'id',
            'product',
            'cancelled_at',
            'start_date',
            'end_date',
          ],
          limit: 8,
          offset: (page - 1) * 8,
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'id',
                'name',
                'street',
                'number',
                'complement',
                'state',
                'city',
                'zip',
              ],
            },
            {
              model: DeliveryMan,
              as: 'deliveryman',
              attributes: ['id', 'name', 'email'],
            },
            {
              model: File,
              as: 'signature',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        };
      }
    } else if (orderId) {
      query = {
        where: { id: orderId, product: { [Op.iLike]: `%${q}%` } },
        order: [['id', 'DESC']],
        attributes: ['id', 'product', 'cancelled_at', 'start_date', 'end_date'],
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'number',
              'complement',
              'state',
              'city',
              'zip',
            ],
          },
          {
            model: DeliveryMan,
            as: 'deliveryman',
            attributes: ['id', 'name', 'email'],
          },
          {
            model: File,
            as: 'signature',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      };
    } else {
      query = {
        where: { product: { [Op.iLike]: `%${q}%` } },
        order: [['id', 'DESC']],
        attributes: ['id', 'product', 'cancelled_at', 'start_date', 'end_date'],
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'number',
              'complement',
              'state',
              'city',
              'zip',
            ],
          },
          {
            model: DeliveryMan,
            as: 'deliveryman',
            attributes: ['id', 'name', 'email'],
          },
          {
            model: File,
            as: 'signature',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      };
    }

    let orders = await Order.findAll(query);

    orders = orders.map((order) => {
      let status = {};

      const split = order.deliveryman.name.split(' ');
      const initialLetters = `${split[0].slice(0, 1)}${split[
        split.length - 1
      ].slice(0, 1)}`.toUpperCase();

      if (order.start_date && order.end_date) {
        status = {
          type: 'delivered',
          text: 'Entregue',
        };
      }

      if (!order.start_date && !order.end_date) {
        status = {
          type: 'pending',
          text: 'Pendente',
        };
      }

      if (order.start_date && !order.end_date) {
        status = {
          type: 'withdrawal',
          text: 'Retirada',
        };
      }

      if (order.cancelled_at) {
        status = {
          type: 'cancelled',
          text: 'Cancelada',
        };
      }

      const {
        id,
        product,
        cancelled_at,
        start_date,
        end_date,
        recipient,
        deliveryman,
      } = order;

      return {
        id,
        idStr: String(order.id).padStart(2, '00'),
        product,
        cancelled_at,
        start_date,
        end_date,
        recipient,
        deliveryman: {
          id: deliveryman.id,
          name: deliveryman.name,
          email: deliveryman.email,
          initialLetters,
        },
        status,
        total: Math.ceil(total / 8),
      };
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const order = await Order.create(req.body);

    const deliveryMan = await DeliveryMan.findByPk(req.body.deliveryman_id);
    const recipient = await Recipient.findByPk(req.body.recipient_id);

    await Queue.add(NewOrderDeliveryMail.key, {
      deliveryMan,
      recipient,
      order,
    });

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const order = await Order.findByPk(req.params.id);

    const {
      id,
      product,
      start_date,
      end_date,
      cancelled_at,
    } = await order.update(req.body);

    return res.json({
      id,
      product,
      start_date,
      end_date,
      cancelled_at,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    await order.destroy();

    return res.json();
  }
}

export default new OrderController();
