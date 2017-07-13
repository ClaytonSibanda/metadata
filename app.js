/**
 * Created by Clayza on 2017-07-13.
 */
let express = require('express');
let app= express();
let bodyParser = require('body-parser');
let multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+"_"+file.originalname )
    }
});

let upload = multer({ storage: storage })

// app.use(express.static(__dirname+'/views/index.html'));
app.use(express.static('/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.sendfile(__dirname+'/views/index.html');
});

app.post('/upload',upload.single('file'),(req,res,next)=>{
res.json({"size":req.file});

next();
});

app.listen(process.env.PORT||3000,()=>{
    console.log("App now listening to port 3000");
});