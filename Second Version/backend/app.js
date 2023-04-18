require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { content } = req.body;

    const bearerToken = req.headers.authorization?.substring(7);

    if (bearerToken !== process.env.SECRET_KEY) {
      return res
        .status(400)
        .json({ ok: false, error: "올바른 키를 입력해주세요." });
    }
    if (!content) {
      return res.status(400).json({ ok: false, error: "질문을 입력해주세요." });
    }

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
      }
    );

    console.log(response.data.choices[0].message.content);

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
