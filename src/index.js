const express = require('express');
const stdRouter = require("./routers/students")


require('./db/connections');

const app = express();
const port = process.env.PORT || 8000;


app.use(express.json())
app.use(stdRouter);


app.get('/', (req, res)=>{
    res.send('hii.. ')
})


app.listen(port, () => {
    console.log(`connected with Port : ${port}`);
})