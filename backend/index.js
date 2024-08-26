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

// Get all entries 
app.get('/get', (async (req, res) => {
    try {
        const entries = await EntryModel.find({});

        return res.status(200).json(entries)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}))


// Get entry by ID 
app.get('/get/:id', (async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await EntryModel.findById(id);

        return res.status(200).json(entry)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

}))

// Update checked entries
app.put('/updatecheck/:id', (async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await EntryModel.findByIdAndUpdate({ _id: id }, req.body)

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' })
        }
        return res.status(200).json({ message: 'Entry updated successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

}))

// Delete an entry
app.delete('/delete/:id', (async (req, res) => {
    try {
        const { id } = req.params;
        const entry = await EntryModel.findByIdAndDelete({ _id: id });

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' })
        }
        return res.status(200).json({ message: 'Entry deleted successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}))

// Create a new entry 
app.post('/add', (async (req, res) => {
    try {
        const { name } = req.body;
        const newEntry = await EntryModel.create({
            name: name
        });

        return res.status(201).send(newEntry)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });

    }
}))

app.listen(3001, () => {
    console.log('Server is running');


})