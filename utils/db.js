import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('test_zusn', 'test_zusn_user', 'kJrUAYN3i4Q5D6ZSVrDcePPNrsIAXHhF', {
//   host: 'dpg-cf962jarrk0e2av109fg-a.oregon-postgres.render.com',
//   // host: 'dpg-cf962jarrk0e2av109fg-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   },
//   dialect: 'postgres',
//   logging: false
// }
// );

// export const sequelize = new Sequelize('mydatabase_72zt', 'mydatabase_72zt_user', 'fGLaWaqj0QKb8dBGVl8L41rUMzYiFveJ', {
//   host: 'dpg-cj1ce115rnuhn3luqang-a.oregon-postgres.render.com',
//   // host: 'dpg-cj1ce115rnuhn3luqang-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

export const sequelize = new Sequelize('database_24_10', 'database_24_10_user', 'OwfCX0mNX9Gl6bwkIBPPjgXNjLOFoA7c', {
  host: 'dpg-cks1f9mnfb1c73eo9du0-a.oregon-postgres.render.com',
  // host: 'dpg-cks1f9mnfb1c73eo9du0-a',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  dialect: 'postgres',
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}