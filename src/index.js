require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 1200;

const{ requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');

const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

//Global middleware
app.use(express.json());
app.use(requestLogger);
app.use(cors());
app.use(cookieParser());

//main server
app.get('/', (req, res) => {
  res.send(`Server is running in ${process.env.NODE_ENV} mode.`);
});

app.use('/api/v1', mainRouter);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
