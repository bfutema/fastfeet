const faker = require('faker');

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'files',
      [
        {
          name: faker.image.image(),
          path: `avatar1.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.image.image(),
          path: `avatar2.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.image.image(),
          path: `avatar3.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.image.image(),
          path: `avatar4.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.image.image(),
          path: `avatar5.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.image.image(),
          path: `avatar6.png`,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
