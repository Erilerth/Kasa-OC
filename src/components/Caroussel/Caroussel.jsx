import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Caroussel({ currentPictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function nextImage() {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentPictures.length
    );
  }

  function prevImage() {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentPictures.length) % currentPictures.length
    );
  }

  return (
    <>
      {currentPictures.length > 0 && (
        <div id='carousel'>
          {currentPictures.length > 1 && (
            <button
              onClick={prevImage}
              className='fa-solid fa-angle-left'></button>
          )}
          <img
            src={currentPictures[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
          />
          {currentPictures.length > 1 && (
            <p className='picture-count'>
              {currentImageIndex + 1}/{currentPictures.length}
            </p>
          )}
          {currentPictures.length > 1 && (
            <button
              onClick={nextImage}
              className='fa-solid fa-angle-right'></button>
          )}
        </div>
      )}
    </>
  );
}

Caroussel.propTypes = {
  currentPictures: PropTypes.array.isRequired,
};
