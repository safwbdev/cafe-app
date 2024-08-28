// KEEP FOR NOW

const express = require('express');
const EntryModel = require('./models/Entry')

const router = express.Router();



// Get all entries 
router.get('/', async (req, res) => {
    try {
        const entries = await EntryModel.find({});

        return res.status(200).json(entries)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})
    ;

// Get entry by ID 
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await EntryModel.findById(id);

        return res.status(200).json(entry)

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});

// Update checked entries
router.put('/:id', async (req, res) => {
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

});

// Delete an entry
router.delete('/:id', async (req, res) => {
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
});

// Create a new entry 
router.post('/', async (req, res) => {
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
});

export default router;