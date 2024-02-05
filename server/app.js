const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const user_routes = require('./routes/user_routes')
const connectDatabase = require('./model/db_connection')
dotenv.config({path:path.join(__dirname,"config","config.env")})

connectDatabase()
app.use("/user",user_routes);

app.listen(process.env.PORT,() => console.log(`Server running at ${process.env.PORT}`));