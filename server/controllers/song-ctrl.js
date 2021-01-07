const Song = require('../models/song-model')

createSong = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a song',
        })
    }

    const song = new Song(body)

    if (!song) {
        return res.status(400).json({ success: false, error: err })
    }

    song
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: song._id,
                message: 'Song created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'song not created!',
            })
        })
}

updateSong = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Song.findOne({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Song not found!',
            })
        }
        song.link = body.link
        song.notes = body.notes
        song
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: song._id,
                    message: 'Song updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Song not updated!',
                })
            })
    })
}

deleteSong = async (req, res) => {
    await Song.findOneAndDelete({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!song) {
            return res
                .status(404)
                .json({ success: false, error: `Song not found` })
        }

        return res.status(200).json({ success: true, data: song })
    }).catch(err => console.log(err))
}

getSongById = async (req, res) => {
    await Song.findOne({ _id: req.params.id }, (err, song) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: song })
    }).catch(err => console.log(err))
}

getSong = async (req, res) => {
    await Song.find({}, (err, song) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!song.length) {
            return res
                .status(404)
                .json({ success: false, error: `Song not found` })
        }
        return res.status(200).json({ success: true, data: song })
    }).catch(err => console.log(err))
}

module.exports = {
    createSong,
    updateSong,
    deleteSong,
    getSong,
    getSongById,
}
