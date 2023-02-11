const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentdata")
.then(()=>{
    console.log('Database Connected');
}).catch((err) => {
    console.log('Database Connection erro');
})