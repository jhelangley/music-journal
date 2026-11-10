import { Album } from "../models/albumModel.js"

async function index(req, res) {
    try {
        const albums = await Album.getAllAlbums();
        res.status(200).json(albums)
    } catch (err) {
        console.error("DATABASE ERROR:", err);
        res.status(500).json({error: err.message})
    }
}

const albumController = { index }

export default albumController