

export function AlbumCard({ album, toggleListened, removeAlbum }) {
    
    return (
        <div className="album-card">
            <img src={album.artwork} alt={`${album.title} album cover`} className="album-artwork"></img>
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <p>{album.genre} - {album.releaseYear}</p>
            <button onClick={toggleListened}>{album.listened ? "Listened" : "Not Listened"}</button>
                <p>{album.rating}</p>
            <p>"{album.comment}"</p>
            <button onClick={removeAlbum}>Remove album</button>
        </div>
    )
}