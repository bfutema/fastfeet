const faker = require('faker');

const recipientIds = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
];

const deliveryMans = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

const signatureIds = [1, 2, 3, 4, 5, 6];

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'orders',
      [
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id:
            recipientIds[Math.floor(Math.random() * recipientIds.length)],
          deliveryman_id:
            deliveryMans[Math.floor(Math.random() * deliveryMans.length)],
          product: faker.commerce.productName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
