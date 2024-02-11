const  express = require('express');
const cors = require("cors")
const connectDB = require('./configs/db');

const app = express();
const port = 8000;

// will parse JSON sent in the body request
app.use(express.json())
app.use(cors())

connectDB();

// const productsController = require("./Controllers/productsController");
const userController = require("./controllers/userController");

// app.use("/products", productsController);
app.use("/auth", userController);

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});