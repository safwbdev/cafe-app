require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGO_API = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDRESS}.mongodb.net/${process.env.MONGO_DB}`;
const EntryModel = require('./models/Entry')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_API)

app.get('/get', ((req, res) => {
    EntryModel.find().then(result => res.json(result)).catch(err => res.json(err))
}))

app.put('/update/:id', ((req, res) => {
    const { id, body } = req.params;
    console.log('pop: ', body);

    EntryModel.findByIdAndUpdate({ _id: id }, { done: true }).then(result => res.json(result)).catch(err => res.json(err))
}))

app.delete('/delete/:id', ((req, res) => {
    const { id } = req.params;
    EntryModel.findByIdAndDelete({ _id: id }).then(result => res.json(result)).catch(err => res.json(err))
}))

app.post('/add', ((req, res) => {
    const task = req.body.name;
    EntryModel.create({
        name: name
    }).then(result => res.json(result)).catch(err => res.json(err))
}))

app.listen(3001, () => {
    console.log('Server is running');


})