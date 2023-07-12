const express = require('express');
const  mongoose = require('mongoose');  
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();
// console.log("hello world")
// app.use('/',(req,res,next) =>{
//     res.send("This is our starting app")
// });
app.use(express.json());
app.use(cors());
app.use("/books",router)
mongoose.connect("mongodb+srv://admin:RpRbghrR5ZWdcZXS@cluster0.ynaybga.mongodb.net/?retryWrites=true&w=majority ")
.then(()=> console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
}).catch((err)=> console.log(err) );
// RpRbghrR5ZWdcZXS