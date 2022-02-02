const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
const server = app.listen(PORT, console.log("Server is running in port: ", PORT));


app.get('/api/v1/work', (req, res) => {

    res.status(200).json({ success: true, msg: "show all work" });

});

app.get('/api/v1/work/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `get ${req.params.id} work` });

});

app.post('/api/v1/work', (req, res) => {

    res.status(200).json({ success: true, msg: "create new work" });

});

app.put('/api/v1/work/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `update ${req.params.id} work` });

});

app.delete('/api/v1/work/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `delete ${req.params.id} work` });

});
// Handle undhandled promise rejections - kill app
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close server and exit process
    // .exit(1) = exit with a `failure`
    server.close(() => {
        process.exit(1);
    });
});