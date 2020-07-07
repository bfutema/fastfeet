import * as Yup from 'yup';
import { Op } from 'sequelize';

import DeliveryMan from '../models/DeliveryMan';
import File from '../models/File';

class DeliveryManController {
  async index(req, res) {
    const { id: deliveryManId } = req.params;
    const { page = 1, q = '', pagination } = req.query;

    const total = await DeliveryMan.count();

    let query = {};

    if (pagination === 'true') {
      if (deliveryManId) {
        query = {
          where: { id: deliveryManId, name: { [Op.iLike]: `%${q}%` } },
          order: [['id', 'DESC']],
          attributes: ['id', 'name', 'email'],
          limit: 8,
          offset: (page - 1) * 8,
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        };
      } else {
        query = {
          where: { name: { [Op.iLike]: `%${q}%` } },
          order: [['id', 'DESC']],
          attributes: ['id', 'name', 'email'],
          limit: 8,
          offset: (page - 1) * 8,
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        };
      }
    } else if (deliveryManId) {
      query = {
        where: { id: deliveryManId, name: { [Op.iLike]: `%${q}%` } },
        order: [['id', 'DESC']],
        attributes: ['id', 'name', 'email'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      };
    } else {
      query = {
        where: { name: { [Op.iLike]: `%${q}%` } },
        order: [['id', 'DESC']],
        attributes: ['id', 'name', 'email'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      };
    }

    let deliveryMans = await DeliveryMan.findAll(query);

    deliveryMans = deliveryMans.map((deliveryMan) => {
      const split = deliveryMan.name.split(' ');
      const initialLetters = `${split[0].slice(0, 1)}${split[
        split.length - 1
      ].slice(0, 1)}`.toUpperCase();

      const { id, name, email, avatar } = deliveryMan;

      return {
        id,
        idStr: String(deliveryMan.id).padStart(2, '00'),
        name,
        initialLetters,
        email,
        avatar,
        total: Math.ceil(total / 8),
      };
    });

    return res.json(deliveryMans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const deliveryMan = await DeliveryMan.create(req.body);

    return res.json(deliveryMan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const deliveryMan = await DeliveryMan.findByPk(req.params.id);

    const { id, name, email, avatar_id } = await deliveryMan.update(req.body);

    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryMan = await DeliveryMan.findByPk(id);

    await deliveryMan.destroy();

    return res.json();
  }
}

export default new DeliveryManController();
