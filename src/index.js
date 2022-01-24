const express = require("express");

const app = express();

app.get("/", controlador)

function controlador(requisicao, resposta) {
    res.send("Meu primeiro servidor")
}

// app.get("/", (requisicao, resposta) => {
//     resposta.send("Meu primeiro servidor")
// })

app.listen(3000)