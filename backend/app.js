const express = require('express');
const port = 8080;
const app = express();
const twilio = require('twilio');
const accountSid = 'AC6719e9a4e1b68d39454972d89769e425'; // Your Account SID from www.twilio.com/console
const authToken = '5ca69acce9ec0d1dc38a8cd0b38c7fb6'; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);
const {stories, titles} = require('./stories.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const sendMessage = function (number, index) {

    console.log("Ho");
    client.messages
    .create({
        body: `${titles[index]}`,
        to: `${number}`, // Text this number
        from: '+1 4148887497', // From a valid Twilio number
    }).then((message) => console.log(message.sid));
}

app.post("/message", (req, res) => {
    console.log(req.body);
    const index = Math.floor(Math.random() * 12);
    // sendMessage(req.body.firstparam, index);
    res.send((stories[index]));
})














app.listen(port, console.log("Server Started Successfully"));