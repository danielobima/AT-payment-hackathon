import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes";
import cookieParser from "cookie-parser";
import { exit } from "process";
import cors from "cors";
import sequelize from "./config/sequelize";

dotenv.config();

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/", router);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: false });
    console.log("⚡️[server]: Database connected");
    console.log("⚡️[server]: Mail transporter connected");
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
    exit(1);
  }
});
