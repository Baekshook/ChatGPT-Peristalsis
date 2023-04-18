require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    console.log(req.headers.authorization?.substring(7));
    console.log(process.env.SECRET_KEY);
    console.log(
      req.headers.authorization?.substring(7) === process.env.SECRET_KEY
    );

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
