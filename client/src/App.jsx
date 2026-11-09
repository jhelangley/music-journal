import { useState } from 'react'
import './App.css'
import { albums as initialAlbums } from './data/albums.js'
import { AlbumCard } from './components/AlbumCard'
import { AddAlbumForm } from './components/AddAlbumForm.jsx'
import { CollectionFilters } from './components/CollectionFilters.jsx'

function App() {
  const [albums, setAlbums] = useState(initialAlbums)
  const [filters, setFilters] = useState({listened: 'all', rating: 'all'})

  const filteredAlbums = albums.filter(album => {
    
    let matchListened = false;
    if (filters.listened === "all") {
      matchListened = true;
    } else if (filters.listened === "listened") {
      matchListened = album.listened;
    } else if (filters.listened === "not-listened") {
      matchListened = !album.listened;
    }

    let matchRating = false;
    
    if (filters.rating === "all") {
      matchRating = true;
    } else if (filters.rating === "unrated") {
      matchRating = album.rating === null;
    } else {
      matchRating = album.rating === Number(filters.rating);
    }

    return matchListened && matchRating
  })
  
  const toggleListened = (id) => {
    setAlbums(prevAlbums => {
      return prevAlbums.map(album => {
        return album.id === id ? {...album, listened: !album.listened} : album 
      })
    })
  }

  const rateAlbum = (id, newRating) => {
    setAlbums(prevAlbums => {
      return prevAlbums.map(album => {
        return album.id === id ? {...album, rating: newRating} : album 
      })
    })
  }

  const saveComment = (id, newComment) => {
    setAlbums(prevAlbums => {
      return prevAlbums.map(album => {
        return album.id === id ? {...album, comment: newComment} : album 
      })
    })
  }
  
  const removeAlbum = (id) => {
    setAlbums(prevAlbums => {
      return prevAlbums.filter(album => album.id !== id)
    })
  }
  
  const addAlbum = (event) => {
    event.preventDefault();
    const albumData = new FormData(event.currentTarget);
    const newAlbum = {
      "id": crypto.randomUUID(),
      "title": albumData.get('name'),
      "artist": albumData.get('artist'),
      "genre": albumData.get('genre'),
      "releaseYear": Number(albumData.get('releaseYear')),
      "listened": false,
      "rating": null,
      "comment": "",
      "artwork": "/images/placeholder.jpeg"
    }
    setAlbums(prevAlbums => [...prevAlbums, newAlbum])
    }
  
  
  return (
    <>
    <h1>Album Journal</h1>
    <CollectionFilters filters={filters} setFilters={setFilters}/>
    
    <div className="album-grid">
    { filteredAlbums.map((album) => (
      <AlbumCard
      album={album}
      key={album.id}
      toggleListened={() => toggleListened(album.id)}
      removeAlbum={() => removeAlbum(album.id)}
      rateAlbum={newRating => rateAlbum(album.id, newRating)}
      saveComment={newComment => saveComment(album.id, newComment)}
      />
    ))}
    </div>
    
    <AddAlbumForm addAlbum={addAlbum} />
    </>)
    
  }
  
  export default App
  