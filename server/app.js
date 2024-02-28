const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const user_routes = require('./routes/user_routes')
const admin_routes = require('./routes/admin_routes')
const authRoute = require("./routes/auth")
const connectDatabase = require('./DB/db_connection')
const cookie = require('cookie-parser')
const cors = require('cors');
const { verifyToken } = require('./routes/token');
dotenv.config({path:path.join(__dirname,"config","config.env")})

connectDatabase()
app.use(cookie())
app.use(cors())
app.use(express.json());
app.use("/user", user_routes);
app.use("/admin",admin_routes)
app.use(authRoute)

app.listen(process.env.PORT,() => console.log(`Server running at ${process.env.PORT}`));