import pg from "pg";

const { Pool } = pg;

const config = {
  user: "postgres",
  host: "localhost",
  database: "always_music",
  password: "root",
  port: 5432, // Puerto por defecto de PostgreSQL
};

const pool = new Pool(config);

export { pool };