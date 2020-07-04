import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import File from '../models/File';
import DeliveryMan from '../models/DeliveryMan';

class DeliveryManLoginController {
  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryManId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails!' });
    }

    const { deliveryManId: id } = req.body;

    const deliveryMan = await DeliveryMan.findOne({
      where: { id },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryMan) {
      return res.status(401).json({ error: 'Delivery man not found!' });
    }

    const { name, email, createdAt, avatar } = deliveryMan;

    return res.json({
      deliveryman: {
        deliveryManId: id,
        name,
        email,
        createdAt,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new DeliveryManLoginController();
