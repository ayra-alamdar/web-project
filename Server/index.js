const express = require('express');
const connectDB = require('./db');
const Item = require('./models/Authorization.js');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

connectDB();


app.get('/', async (req, res) => {
    const response = await Item.find()
   return res.json({items : response})

})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});