const asyncHandler = require('express-async-handler')
const EntryModel = require('../models/Entry')

const getEntries = asyncHandler(async (req, res) => {
    try {
        const entries = await EntryModel.find({});

        return res.status(200).json(entries)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})


const getEntryById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await EntryModel.findById(id);

        return res.status(200).json(entry)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

})

const updateCheckedEntry = asyncHandler(async (req, res) => {
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

})


const updateEntry = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await EntryModel.findByIdAndUpdate(id, req.body)

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' })
        }
        return res.status(200).json({ message: 'Entry updated successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

})


const deleteEntry = asyncHandler(async (req, res) => {
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
})

const createEntry = asyncHandler(async (req, res) => {
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
})


module.exports = {
    getEntries,
    getEntryById,
    createEntry,
    updateEntry,
    updateCheckedEntry,
    deleteEntry,
}