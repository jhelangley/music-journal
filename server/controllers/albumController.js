function index(req, res) {
    try {
        const album = [{"name": "blah"}]
        res.status(200).json(album)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const albumController = { index }

export default albumController