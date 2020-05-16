const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { User } = require('./model/user');

mongoose.connect(
    config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)
.then(() => console.log('DB connected'))
.catch(err => console.error('Error connecting DB'));


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) return res.json ({
            success: false,
            err
        });
        return res.status(200).json({
            success: True,
            userData: doc
        })
    })

})

app.listen(5000);
