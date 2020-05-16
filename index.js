const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://node-shop:' + 
    process.env.MONGO_ATLAS_PW + 
    '@node-rest-shop-2eja9.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)
.then(() => console.log('DB connected'))
.catch(err => console.error('Error connecting DB'));

app.get('/', (req, res) => {
    res.send('Hello world')
});



app.listen(5000);
