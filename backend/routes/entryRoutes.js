const express = require('express')
const router = express.Router()
const {
    getEntries,
    updateEntry,
    deleteEntry,
    createEntry,
    getEntryById,
} = require('../controllers/entryController')


router.route('/').get(getEntries).post(createEntry)
router.route('/:id').get(getEntryById).delete(deleteEntry).put(updateEntry)

module.exports = router
