const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// route files
const works = require('./routes/work');



//dev logging middle ware
if (process.env.NODE_ENV === 'development') {

    app.use(morgan('dev'));
}

//mount routers
app.use(express.json());

app.use('/api/v1/works', works);
const server = app.listen(PORT, console.log("Server is running in port: ", PORT));

// Handle undhandled promise rejections - kill app
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close server and exit process
    // .exit(1) = exit with a `failure`
    server.close(() => {
        process.exit(1);
    });
});