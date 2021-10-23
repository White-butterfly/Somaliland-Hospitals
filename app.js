const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser=require('body-parser');

require('dotenv').config({path:'./config.env'});
require('./server');
const app=express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
const hospitalRouter= require('./routes/hospitalRoutes');
// const userRouter= require('./routes/userRoutes')
const Routes= require ('./server/route')
const departmentRouter= require('./routes/departmentRoutes');
const appoinmentRouter= require('./routes/appoinmentRoutes');
const authRouter= require ('./routes/authroute');
const doctorRouter= require ('./routes/doctorRoute')
//middle ware
app.use('/api/hospital', hospitalRouter);
app.use('/users', Routes);
app.use('/api/Department',departmentRouter );
app.use('/api/appoinment', appoinmentRouter);
app.use('/api/auth',authRouter);
app.use('/api/doctor', doctorRouter);


const port= process.env.port;
app.listen(port,()=> console.log(`started on port ${port}`));


