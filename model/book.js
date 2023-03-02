const mongoose = require('mongoose')

const Collection = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
    create_at: {
        type: 'Date',
        default: Date.now()
    }
})

module.exports = mongoose.model('Collections', Collection) 
