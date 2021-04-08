const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const expressValidator = require('express-validator');
require('dotenv').config();
const app = express();


// database
mongoose.connect(process.env.MONGOOSE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("DB is connected!!!");
    })

// routes
const postRoutes = require('./routes/post.js');


// middleware
app.use(morgan("dev"));
app.use(expressValidator);
app.use('/posts', postRoutes);

// const PORT = process.env.PORT || 3000;
const PORT = 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));