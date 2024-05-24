import { useState } from 'react';
import axios from 'axios';

export default function GalleryItem({ item, fetchGallery }) {
  const [toggleDescription, setToggleDescription] = useState(false);

  async function incrementLikes(id) {
    try {
      await axios.put(`/api/gallery/like/${id}`);
      fetchGallery();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      {toggleDescription === true ? (
        <div
          style={{ height: '200px', width: '200px ' }}
          onClick={() => setToggleDescription(!toggleDescription)}
        >
          {item.description}
        </div>
      ) : (
        <img
          src={item.url}
          style={{ height: '200px' }}
          onClick={() => setToggleDescription(!toggleDescription)}
        ></img>
      )}
      <p>
        {' '}
        Likes: {item.likes}{' '}
        <button onClick={() => incrementLikes(item.id)}>Like</button>
      </p>
    </>
  );
}
