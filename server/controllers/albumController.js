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

async function create(req, res) {
    try {
        const { title, artist } = req.body
        
        if (!title || !artist) {
            return res.status(400).json({
                error: "Title and artist are required"
            })
        }

        const newAlbum = await Album.createAlbum(req.body)
        res.status(201).json(newAlbum)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Failed to create album" })
    }
}

async function update(req, res) {
    try {
        const data = req.body;
        const album_id = req.params.album_id;
        const albumToUpdate = await Album.getOneAlbum(album_id)

        if (!albumToUpdate) {
            return res.status(404).json({error: "Album not found"})
        }

        const updatedAlbum = await albumToUpdate.updateAlbum(data)
        res.status(200).json(updatedAlbum);
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Failed to update album"})
    }
}

async function destroy(req, res) {
    try {
        const album_id = req.params.album_id;
        const deletedAlbum = await Album.deleteAlbum(album_id);
        
        if (!deletedAlbum) {
            return res.status(404).json({ error: "Album not found" });
        }
        
        res.status(204).end();
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to delete album" })
    }
}



const albumController = { index, create, update, destroy }

export default albumController