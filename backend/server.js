const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

console.log(process.env.API_KEY);

const app = express();

app.use(cors());

app.get("/clima/:cidade", async (req, res) => {

    const cidade = req.params.cidade;

    try {

        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`);

        console.log(process.env.API_KEY);

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {

        res.status(500).json({
            erro: "Erro ao buscar clima"
        });

    }

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});