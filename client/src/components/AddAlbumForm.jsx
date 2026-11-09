export function AddAlbumForm ({ addAlbum }) {
    
    return (
        <form id="add-album-form" onSubmit={addAlbum}>
        
        <label>Album Title:
            <input name='title' type='text'></input>
        </label>
        
        <label>Artist:
            <input name='artist' type='text'></input>
        </label>
        
        <label>Release Year:
            <input name='releaseYear' type='number'></input>
        </label>
        
        <label>Genre:
            <input name='genre' type='text'></input>
        </label>
        
        <button type='submit'>Submit</button>
        </form>
    )
}