const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ path: "./config.env" });
require("./server");
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
const hospitalRouter = require("./routes/hospitalRoutes");
const userRouter = require("./routes/userRoutes");
const departmentRouter = require("./routes/departmentRoutes");
const appoinmentRouter = require("./routes/appoinmentRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const doctorRouter = require("./routes/doctorRoute");
const contactRouter = require("./routes/contactRoutes");
const blogRouter = require("./routes/blogRoutes");

//middle ware
app.use("/api/hospital", hospitalRouter);
app.use("/api/user", userRouter);
app.use("/api/Department", departmentRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appoinment", appoinmentRouter);
app.use("/api/review", reviewRouter);
app.use("/api/blog", blogRouter);
app.use("/api/contact", contactRouter);

const port = process.env.port;
app.listen(port, () => console.log(`started on port ${port}`));
