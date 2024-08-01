import { Client } from "pg";
import { Pool } from "pg";

const db = new Client({
  user: process.env.USERPG,
  host: process.env.HOST,
  database: process.env.DATABASEPG,
  password: process.env.PGPASS,
  port: Number(process.env.PGPORT),
});

export default db;

export const pool = new Pool({
  user: process.env.USERPG,
  host: process.env.HOST,
  database: process.env.DATABASEPG,
  password: process.env.PGPASS,
  port: Number(process.env.PGPORT),
});

// db.connect()
//   .then(() => {
//     console.log("DATABASE CONNECTED");
//   })
//   .catch((err) => {
//     console.error("DATABASE CONNECTION ERROR", err.stack);
//     console.error("ENV VARIABLES", {
//       USER: process.env.USERPG,
//       HOST: process.env.HOST,
//       DATABASEPG: process.env.DATABASEPG,
//       PGPORT: process.env.PGPORT,
//     });
//   });


