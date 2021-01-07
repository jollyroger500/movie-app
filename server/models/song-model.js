var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema(
    {
        link: { type: String, required: true },
        notes: { type: [String], required: true },
    },
    { timestamps: true },
);


module.exports = mongoose.model('song', SongSchema);