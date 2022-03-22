const express = require('express');
const http = require('http');
const path = require('path');
const multer = require('multer');


 const app = express();
 app.use(express.json())
 const port = 5001 || process.env.PORT;
 const server = http.createServer(app);
 server.listen(port,() => console.log('app is listening to port => ',port))

// multer - handle uploads
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"./client/public/uploads");
        },
        filename:(req,file,cb) => {
            cb(null,Date.now() + path.extname(file.originalname));
        }
});

const upload = multer({storage})

//  routes
 app.get('/',(req,res) => {
 res.json({status:'server is up and running!'})
 });

 app.post('/upload',upload.single('image'),(req,res) => {
     try {
         res.send(req.file)
     } catch (error) {
         console.log(error);
     }
 })