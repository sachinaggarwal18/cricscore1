const express = require('express');
const UserRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import CORS middleware
const connectToDB = require('./config/db');

dotenv.config();
connectToDB();

const app = express();

// Enable CORS for frontend running on localhost:5173
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', UserRouter);

app.listen(2001, () => {
    console.log('hi');
});
