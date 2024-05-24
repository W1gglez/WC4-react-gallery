import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => fetchGallery, []);

  async function fetchGallery() {
    try {
      const result = await axios.get('/api/gallery');
      setGallery(result.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      {gallery.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          fetchGallery={fetchGallery}
        />
      ))}
    </div>
  );
}
