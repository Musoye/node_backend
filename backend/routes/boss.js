const express = require('express')

const router = express.Router()

router.get('/bas', (req, res) => {
    res.json({'message': 'boss sidi'})
})
router.get('/basa', (req, res) => {
    res.send('Mustapha is a good boy')
})

module.exports = router
