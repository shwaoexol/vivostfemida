require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

// Логируем все запросы
app.use((req, res, next) => {
  console.log(`REQUEST: ${req.method} ${req.url}`);
  next();
});

// Проверка сервера
app.get("/", (req, res) => {
  res.send("Vivost Telegram Bot работает");
});

// Telegram webhook
app.post("/telegram-webhook", async (req, res) => {
  const post = req.body.channel_post;

  try {
    await fetch("http://localhost:3000/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    console.log("Отправлено в Next.js");
  } catch (error) {
    console.error(error);
  }

  res.sendStatus(200);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `Server started on port ${process.env.PORT || 3001}`
  );
});