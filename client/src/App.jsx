import { useState, useEffect } from 'react'
import './App.css'
import { albums as initialAlbums } from './data/albums.js'
import { AlbumCard } from './components/AlbumCard'
import { AddAlbumForm } from './components/AddAlbumForm.jsx'
import { CollectionFilters } from './components/CollectionFilters.jsx'

function App() {
  const [albums, setAlbums] = useState([])
  
  async function fetchAlbums() {
    const response = await fetch('http://localhost:3000/api/albums');
    const data = await response.json();
    setAlbums(data)
  }
  
  useEffect(() => {
    fetchAlbums()
  }, [])
  
  
  
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
  
  const toggleListened = async (album_id) => {
    
    const album = albums.find(album => album.album_id === album_id)
    
    const response = await fetch(`http://localhost:3000/api/albums/${album_id}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ listened: !album.listened })
      })
      
      if (response.ok) {
        await fetchAlbums()
      }
    }
    
    const rateAlbum = async (album_id, newRating) => {
      const response = await fetch(`http://localhost:3000/api/albums/${album_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: newRating })
      })
      
      if (response.ok) {
        await fetchAlbums()
      }
    }
    
    const saveComment = async (album_id, newComment) => {
      const response = await fetch(`http://localhost:3000/api/albums/${album_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment: newComment })
      })
      
      if (response.ok) {
        await fetchAlbums()
      }
    };
    
    const removeAlbum = async (album_id) => {
      const response = await fetch(`http://localhost:3000/api/albums/${album_id}`, { 
        method: 'DELETE' 
      })
      
      if (response.ok) {
        await fetchAlbums();
      }
    }
    
    const addAlbum = async (newAlbum) => {
      const response = await fetch(`http://localhost:3000/api/albums/`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlbum)
        
      });
      
      if (response.ok) {
        await fetchAlbums();
      }
    }
    
    
    return (
      <>
      <h1>Album Journal</h1>
      <CollectionFilters filters={filters} setFilters={setFilters}/>
      
      <div className="album-grid">
      
      { filteredAlbums.map((album) => (
        <AlbumCard
        album={album}
        key={album.album_id}
        toggleListened={() => toggleListened(album.album_id)}
        removeAlbum={() => removeAlbum(album.album_id)}
        rateAlbum={newRating => rateAlbum(album.album_id, newRating)}
        saveComment={newComment => saveComment(album.album_id, newComment)}
        />
      ))}
      <div className="add-album-card">
        <h2>Add New Album</h2>
      <AddAlbumForm addAlbum={addAlbum} />
      </div>
      </div>
      
      
      </>)
      
    }
    
    export default App
    