import Deliverer from '../models/Deliverer';

class DelivererController {
  async store(req, res) {
    const deliverer = await Deliverer.create(req.body);

    return res.json(deliverer);
  }
}

export default new DelivererController();
