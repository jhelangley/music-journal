export function AddAlbumForm ({ addAlbum }) {
    
    const submitAlbum = (event) => {
        event.preventDefault();
            const albumData = new FormData(event.currentTarget);
            const newAlbum = {
              "title": albumData.get('title').trim(),
              "artist": albumData.get('artist').trim(),
              "genre": albumData.get('genre').trim(),
              "release_year": Number(albumData.get('release_year')),
              "listened": false,
              "rating": null,
              "comment": "",
              "artwork_url": albumData.get('artwork_url') || null
            }
        addAlbum(newAlbum)
        event.currentTarget.reset();
    }
    
    return (
        <form id="add-album-form" onSubmit={submitAlbum}>
        
        <label>Album Title:
            <input name='title' type='text' required></input>
        </label>
        
        <label>Artist:
            <input name='artist' type='text' required></input>
        </label>
        
        <label>Release Year:
            <input name='release_year' type='number' required min='1900' max='2050'></input>
        </label>
        
        <label>Genre:
            <input name='genre' type='text'></input>
        </label>

        <label>Artwork URL:
            <input name='artwork_url' type='url'></input>
        </label>
        
        <button type='submit'>Submit</button>
        </form>
    )
}