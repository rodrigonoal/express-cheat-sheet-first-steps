const express = require("express");

const porta = 3000;

const app = express();

app.get("/", controlador);

function controlador(requisicao, resposta) {
  resposta.send("Meu primeiro servidor");
}

// app.get("/", (requisicao, resposta) => {
//     resposta.send("Meu primeiro servidor")
// })

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
