const express = require("express");
const app = express();
const cors = require("cors");

// config cors
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
