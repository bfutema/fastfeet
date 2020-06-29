import * as Yup from 'yup';

import Deliverer from '../models/Deliverer';

class DelivererController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const deliverer = await Deliverer.create(req.body);

    return res.json(deliverer);
  }
}

export default new DelivererController();
