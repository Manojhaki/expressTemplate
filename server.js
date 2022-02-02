const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
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