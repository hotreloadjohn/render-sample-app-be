const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const { pool } = require("./config/database");

// config cors
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    console.log(rows);

    res.json({ data: rows });
  } catch (error) {
    console.log(error);
  }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
