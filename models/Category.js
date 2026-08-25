const mongoose = require('mongoose')

const categoryschema = new mongoose.Schema({
    name: {
        type: String,
    
        unique: true,
        trim: true
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
//     createdBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'User'
//   }
}, { timestamps: true })

module.exports = mongoose.model('Category',categoryschema)