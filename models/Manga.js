const mongoose = require('mongoose');

const MangaSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    volumes: { 
        type: String,
        required: true
    },

    completed: {
        type: String
    }

})

module.exports = mongoose.model('Mangalist', MangaSchema);