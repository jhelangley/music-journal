import db from '../db/connect.js'

export class Album {
    constructor(
        { album_id, title, artist, genre, release_year, listened, rating, comment, artwork_url }
    )

    {
        this.album_id = album_id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.release_year = release_year;
        this.listened = listened;
        this.rating = rating;
        this.comment = comment;
        this.artwork_url = artwork_url;
    }


    static async getAllAlbums() {
        const response = await db.query('SELECT * FROM albums ORDER BY title ASC;')

        if (response.rows.length === 0) {
            return []
        }

        return response.rows.map(a => new Album(a))
    }

    static async deleteAlbum(album_id) {
        const response = await db.query('DELETE FROM albums WHERE id = $1 RETURNING *', [album_id])

        if (response.rows.length === 1) {
            return new Album(response.rows[0])
        } else {
            return null;
        }
    }

}
