import { CommentForm } from "./CommentForm"
import { RatingControl } from "./RatingControl"

export function AlbumCard({ album, toggleListened, rateAlbum, removeAlbum, saveComment }) {
    
    return (
        <div className="album-card">
            <img src={album.artwork} alt={`${album.title} album cover`} className="album-artwork"></img>
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <p>{album.genre} - {album.releaseYear}</p>
            <button onClick={toggleListened}>{album.listened ? "Listened" : "Not Listened"}</button>
            <RatingControl rateAlbum={rateAlbum} rating={album.rating}/>
            <CommentForm saveComment={saveComment} comment={album.comment}/>
            <button onClick={removeAlbum}>Remove album</button>
        </div>
    )
}