const sequelize = require('./config/connection');

const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // Use force: true to drop and recreate tables
  console.log('Database synchronized');
  process.exit(0);
};

syncDatabase();
