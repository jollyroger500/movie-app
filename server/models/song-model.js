const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
    {
        link: { type: String, required: true },
        notes: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('songs', Song)