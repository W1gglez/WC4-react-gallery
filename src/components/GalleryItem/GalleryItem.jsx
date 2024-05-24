import { useState } from 'react';

export default function GalleryItem({ item }) {
  const [toggleDescription, setToggleDescription] = useState(false);
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
      <p> Likes: {item.likes}</p>
    </>
  );
}
