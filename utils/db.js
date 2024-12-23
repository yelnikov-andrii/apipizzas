import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize('db_ct4e', 'db_ct4e_user', 'owytH5C8f6TjqKt2DB3rEmv78zGcZPO4', {
//   // host: 'dpg-cr87bujqf0us73braolg-a.oregon-postgres.render.com',
//   host: 'dpg-cr87bujqf0us73braolg-a',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     }
//   },
//   dialect: 'postgres',
//   logging: false,
// });

export const sequelize = new Sequelize('december_db', 'december_db_user', 'CSXkeLATZYYS1lZtcVyOLnV0TulCqbbj', {
  // host: 'dpg-ctkjugi3esus73e8nmk0-a.oregon-postgres.render.com',
  host: 'dpg-ctkjugi3esus73e8nmk0-a',
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