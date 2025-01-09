const express = require('express');
const UserRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser')
const connectToDB = require('./config/db')
connectToDB();

const app = express();

app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', UserRouter)

app.listen(2000, () => {
    console.log('hi');
})