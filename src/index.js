require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const {requestLogger, errorHandler} = require('./middleware')

const mainRouter = require("./routes")

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);
app.use(cors());


app.get('/', (req, res) => {
   res.send('Welcome to Blogify Api');
});



app.use("/api/v1", mainRouter);


app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});