export function AddAlbumForm ({ addAlbum }) {
    
    const submitAlbum = (event) => {
        event.preventDefault();
            const albumData = new FormData(event.currentTarget);
            const newAlbum = {
              "title": albumData.get('title').trim(),
              "artist": albumData.get('artist').trim(),
              "genre": albumData.get('genre').trim(),
              "releaseYear": Number(albumData.get('releaseYear')),
              "listened": false,
              "rating": null,
              "comment": "",
              "artwork": "/images/placeholder.jpeg"
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
            <input name='releaseYear' type='number' required min='1900' max='2050'></input>
        </label>
        
        <label>Genre:
            <input name='genre' type='text'></input>
        </label>
        
        <button type='submit'>Submit</button>
        </form>
    )
}