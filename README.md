# Ambiente local para testes de lamda function
Este projeto foi criado para motivos academicos para minha aprendizagem pessoal
em lambda function utilizado o [Node.js](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

Feramentas Utilizadas:
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [lambda-local](https://www.npmjs.com/package/lambda-local)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [bodyParser](https://www.npmjs.com/package/body-parser)
* [cors](https://www.npmjs.com/package/cors)
* [nodemon](https://nodemon.io/)

## Screenshots
code view:
```js
require('dotenv').config()
const lambdaLocal = require('lambda-local');
const expres = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = expres();
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const port = process.env.SERVER_PORT || 8080;
const timeoutMs = process.env.LAMBDA_TIMEOUT || 3000;
const lambdaPath = "seuCaminho/index.js"
const event = {}

app.get('/', (req, res, next)=>{
    lambdaLocal.execute({
        event,
        lambdaPath,
        timeoutMs,
        callback: function(err, data) {
            if(err){
                next(err)
            }
            res.json(data)
        },
        clientContext: JSON.stringify({clientId: 'xxxx'})
    });
});

app.listen(port, ()=>{
    console.log(`Server on http://localhost:${port}`)
});
```

## Development

### Setup

#### 1) Instalação de dependencias
``` sh
npm i 
```
Obs: E necessario que o [NodeJs](https://nodejs.org/en/) já esteja instalado em sua máquina

#### 2) Iniciar Projeto
``` sh
npm run dev

# verificar a url http://localhost:8080 ou http://localhost:customPort
```
## Contato

Desenvolvido por: [Ismael Alves](https://github.com/ismaelalvesgit)

* Email: [cearaismael1997@gmail.com](mailto:cearaismael1997@gmail.com) 
* Github: [github.com/ismaelalvesgit](https://github.com/ismaelalvesgit)
* Linkedin: [linkedin.com/in/ismael-alves-6945531a0/](https://www.linkedin.com/in/ismael-alves-6945531a0/)

### Customização de Configurações do projeto
Verifique [Configurações e Referencias](https://expressjs.com/pt-br/).