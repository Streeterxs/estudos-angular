const express= require('express'),
path = require('path');

const app =express();


app.use(express.static('./app-deploy-test/dist'));

app.get('/*', (req,res)=>{

res.sendFile(path.join(__dirname,`./app-deploy-test/dist/index.html`));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})