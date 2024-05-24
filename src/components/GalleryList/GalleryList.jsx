import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Box from '@mui/joy/Box';

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
    <Box
      component='ul'
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 8 }}
    >
      {gallery.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          fetchGallery={fetchGallery}
        />
      ))}
    </Box>
  );
}
