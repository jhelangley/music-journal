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

    static async getOneAlbum(album_id) {
        const response = await db.query('SELECT * FROM albums WHERE album_id = $1;', [album_id])

        if (response.rows.length === 1) {
            return new Album(response.rows[0])
        } else {
            return null
        }
    }

    static async deleteAlbum(album_id) {
        const response = await db.query('DELETE FROM albums WHERE album_id = $1 RETURNING *', [album_id])

        if (response.rows.length === 1) {
            return new Album(response.rows[0])
        } else {
            return null;
        }
    }


    static async createAlbum(data) {
        const { title, artist, release_year, genre, artwork_url } = data;

       

        const response = await db.query('INSERT INTO albums (title, artist, release_year, genre, artwork_url) VALUES($1, $2, $3, $4, $5) RETURNING *;',
            [title, artist, release_year, genre, artwork_url]
        )

        return response.rows[0]
    }

    async updateAlbum(data) {
        const title = data.title ?? this.title;
        const artist = data.artist ?? this.artist;
        const release_year = data.release_year ?? this.release_year;
        const genre = data.genre ?? this.genre;
        const rating = data.rating !== undefined ? data.rating : this.rating;
        const listened = data.listened ?? this.listened;
        const comment = data.comment !== undefined ? data.comment : this.comment;
        const artwork_url = data.artwork_url ?? this.artwork_url;

        const response = await db.query(
            'UPDATE albums SET title = $1, artist = $2, release_year = $3, genre = $4, rating = $5, listened = $6, comment = $7, artwork_url = $8 WHERE album_id = $9 RETURNING *;',
            [title, artist, release_year, genre, rating, listened, comment, artwork_url, this.album_id]);
        
        return new Album(response.rows[0]);
    }

}
