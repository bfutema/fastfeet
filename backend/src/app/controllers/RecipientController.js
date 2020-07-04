import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, q = '', pagination } = req.query;

    if (pagination) {
      let recipients = await Recipient.findAll({
        where: { name: { [Op.iLike]: `%${q}%` } },
        order: [['id', 'DESC']],
        limit: 8,
        offset: (page - 1) * 8,
      });

      recipients = recipients.map((recipient) => {
        const {
          id,
          name,
          street,
          number,
          complement,
          state,
          city,
          zip,
          createdAt,
          updatedAt,
        } = recipient;
        return {
          id,
          idStr: String(recipient.id).padStart(2, '00'),
          name,
          street,
          number,
          complement,
          state,
          city,
          zip,
          createdAt,
          updatedAt,
        };
      });

      return res.json(recipients);
    }

    let recipients = await Recipient.findAll({
      where: { name: { [Op.iLike]: `%${q}%` } },
      order: [['id', 'DESC']],
    });

    recipients = recipients.map((recipient) => {
      const {
        id,
        name,
        street,
        number,
        complement,
        state,
        city,
        zip,
        createdAt,
        updatedAt,
      } = recipient;
      return {
        id,
        idStr: String(recipient.id).padStart(2, '00'),
        name,
        street,
        number,
        complement,
        state,
        city,
        zip,
        createdAt,
        updatedAt,
      };
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    await recipient.destroy();

    return res.json();
  }
}

export default new RecipientController();
