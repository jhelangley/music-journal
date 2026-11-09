export function AddAlbumForm ({ addAlbum }) {
    
    return (
        <form id="add-album-form" onSubmit={addAlbum}>
            <p>Album Title:</p>
            <input name='title' type='text'></input>
            <p>Artist:</p>
            <input name='artist' type='text'></input>
            <p>Release Year:</p>
            <input name='releaseYear' type='number'></input>
            <p>Genre:</p>
            <input name='genre' type='text'></input>
            <button type='submit'>Submit</button>
        </form>
    )
}