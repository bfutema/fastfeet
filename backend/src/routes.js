import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliveryManController from './app/controllers/DeliveryManController';
import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Atualização do usuário logado (Desafio: 1/4)
routes.put('/users', UserController.update);

// Criação e atualização dos destinatários (Desafio: 1/4) OK
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

// Listagem, criação, atualização e remoção de entregadores (Desafio: 2/4) OK
routes.get('/deliverymans', DeliveryManController.index);
routes.post('/deliverymans', DeliveryManController.store);
routes.put('/deliverymans/:id', DeliveryManController.update);
routes.delete('/deliverymans/:id', DeliveryManController.delete);

// Listagem, criação, atualização e remoção de encomendas (Desafio: 2/4) OK
routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

// Listagem, criação, atualização e remoção de encomendas do entregador (Desafio: 2/4) OK
routes.get(
  '/deliverymans/:deliveryman_id/deliveries',
  DeliveryController.index
);
routes.post(
  '/deliverymans/:deliveryman_id/deliveries',
  DeliveryController.store
);
routes.put(
  '/deliverymans/:deliveryman_id/deliveries/:id',
  DeliveryController.update
);

// Listagem e criação de problemas com a entrega (Desafio: 2/4)
routes.get('/delivery/:id/problems', DeliveryProblemController.index);
routes.post('/delivery/:id/problems', DeliveryProblemController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
