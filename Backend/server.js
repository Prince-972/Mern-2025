const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const todoRoute = require('./routers/todoRouters')

const router=require('./routers/egrouter')
dotenv.config();



const app=express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(router)
app.use('/todo',todoRoute)

app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}`);
});


module.exports = app; // Export the app for testing purposes
