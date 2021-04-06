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
