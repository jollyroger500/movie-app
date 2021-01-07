var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CategorySchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('category', CategorySchema)