const express = require('express');
const cors = require('cors');
const cookiesParser= require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const authRoute = require('./routes/authRoute')



//Passport configuration
require('./config/passport')

const app = express();


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDb connected'))
.catch(err => console.log(err))

app.use(cors({
    origin: process.env.UI_URL,
    credentials:true
}))

app.use(cookiesParser());
app.use(express.json());
app.use(passport.initialize())
const searchRoutes = require("./routes/searchRoutes");


//routes
app.use('/auth',authRoute)
app.use("/api", searchRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`server running on port ${PORT}`))



