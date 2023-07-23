import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User, SportCenter, Service, Reservation } from "./Entities";
dotenv.config();
console.log(process.env.DATABASE_SQL_PASS);

export const dataSource = new DataSource({
  type: "mysql",
  username: "david",
  password: process.env.DATABASE_SQL_PASS,
  port: 3306,
  host: "localhost",
  database: "sportscenter",
  entities: [User, SportCenter, Service, Reservation],
  synchronize: true,
  ssl: false,
});
