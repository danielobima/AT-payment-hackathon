import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: 5432,
  username: "root",
  password: process.env.PASSWORD,
  models: [__dirname + "/../models"], // or [Player, Team],
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});
export default sequelize;
