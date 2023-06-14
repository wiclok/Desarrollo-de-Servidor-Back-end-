
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const routes = require("../routes/index.js")
require("dotenv").config();



const port = 6000



app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes);



app.listen(port, ( ) => {
    console.log(`server escuchando en el puerto ${port}`)
});

