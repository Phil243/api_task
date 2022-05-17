//postgreSQL
//Kann noch nicht über 'import { Pool } from "pg"' importiert werden, daher extraschritt:
import pkg from "pg";
const { Pool } = pkg;

//PG Connection String hides the access data for the API in the .env file
const connectionString = process.env.PG_CONNECTIONSTRING;

const pool = new Pool({
    connectionString,
});

export default pool;