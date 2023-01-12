import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "642531misina",
  database: "crud",
});
