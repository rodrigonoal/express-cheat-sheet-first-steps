# Express Cheat Sheet

## Step by step:

Esse é um passo a passo para a criação do primeiro servidor.
Ele exemplifica como definir rotas e controladores e criar um servidor simples no Express, assumindo o básico de conhecimento em Javascript, node e npm.
Nosso servidor exemplo rodará na URL http://localhost:3000/ e receberá requisições Http tipo "Get", retornando um texto simples.

### 1- Vamos começar pelo terminal:

```bash
# 1 - Em uma nova pasta, para criar um novo projeto:
npm init -y


# 2 - Para inicializar o Git
git init


# 3 - Então, para instalar o express:
npm i express


# OPCIONAL!
# Aqui listei instruções para a criação de pastas/ arquivos necessários
# utilizando comandos no terminal, porém você poderá criá-los da maneira
# que achar melhor

# 4 - Agora criamos um arquivo .gitignore com o conteúdo 'node_modules/'
# Bash:
echo "node_modules/" >> .gitignore

# Powershell:
New-Item .gitignore
Set-Content .gitignore 'node_modules/'


# 5 - Por fim, criamos a pasta source (fonte) e o arquivo index.js
# Bash:
mkdir src
touch src/index.js

#Powershell
md src
New-Item src/index.js
```

### 2- Configurando o servidor

Aqui será editado o arquivo "src/index.js".

```javascript
// 1 - Importamos o express:
const express = require("express");

// 2 - Criamos um app, que nada mais é que o express sendo chamado:

const app = express();

// 3.1 - Declaramos uma rota. Este exemplo é para um método get, que recebe dois argumentos:
// - o endereço da rota, que no caso é "/"
// - uma função callback que chamaremos de controlador

app.get("/", controlador);

// 3.2 - Criamos um controlador, que é uma função que recebe uma
// requisição e uma resposta como argumentos, e será executada quando
// nossa rota for chamada por um cliente. Sendo uma rota do tipo "get", é
// necessário que seja enviada uma resposta. Neste caso, enviaremos com o
// método send:

function controlador(requisicao, resposta) {
  resposta.send("Meu primeiro servidor!");
}

// 3.3 - Se quisermos utilizar a grafia de arrow function na callback,
// em vez de uma função por fora, poderemos editar nossa rota dessa forma:

app.get("/", (requisicao, resposta) => {
  resposta.send("Meu primeiro servidor!");
});

// 6.1 - Por fim, devemos declarar a porta de entrada do nosso servidor,
// pela qual ele receberá todas as requisições. Para determinarmos como
// "http://localhost:3000/", basta  fazer dessa forma:

app.listen(3000);

// 6.2 - Pode ser uma boa ideia declarar a porta como variável, afim de que
// o servidor nos certifique de que está correndo tudo bem. Para isso, é
// possível passar uma callback para o listen, que simplesmente certificará isso no console.

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
```

### 3 - Inicializando o servidor

Por fim, para inicializarmos o servidor, basta, de dentro da pasta em
que se encontra nosso package.json, rodar o seguinte comando no terminal:

```bash
node src/index.js
```

Agora, com seu browser ou auxílio de um cliente, como Insomnia, poderá acessar a resposta pela url: http://localhost:3000/

### Extra!

Podemos editar o package.json para que o npm rode comandos para nós!

Dentro de seu package.json há um item chamado "scripts", que deverá
estar mais ou menos assim:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    }
```

Vamos incluir um script chamado "server", que rodará a aplicação

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "node src/index.js"
    }
```

Agora você poderá rodar seu servidor através do terminal, dentro de
qualquer pasta de seu projeto, com um simples:

```bash
npm run server
```
