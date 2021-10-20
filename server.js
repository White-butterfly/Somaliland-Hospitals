const mongoose= require('mongoose');

const DB= process.env.DB.replace('<PASSWORD>',process.env.db_Password);

mongoose.connect(DB).then(()=>console.log('connected to database'));
