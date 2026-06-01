const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

const app = express();

app.use(cors());

app.get("/clima/:cidade", async (req, res) => {
  const cidade = req.params.cidade;

  try {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`
    );

    const dados = await resposta.json();

    res.json(dados);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar clima",
    });
  }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});