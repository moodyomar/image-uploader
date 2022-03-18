const express = require('express');
 const http = require('http');


 const app = express();
 app.use(express.json())
 const port = 5001 || process.env.PORT;
 const server = http.createServer(app);
 server.listen(port,() => console.log('app is listening to port => ',port))

//  routes
 app.get('/',(req,res) => {
 res.json({status:'server is up and running!'})
 });

 app.get('/upload:file',(req,res) => {
     res.json({uploading:'true'});
     console.log(req.params.file);
 })

 app.get('/test',(req,res) => {
     res.json({test:'works'});
 })
 
