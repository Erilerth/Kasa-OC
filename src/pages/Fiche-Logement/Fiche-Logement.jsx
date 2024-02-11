import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../data/logements.json';

function FicheLogement() {
  const { id } = useParams();
  const currentLogement = LogementData.find((logement) => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentPicture = currentLogement.pictures;

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentPicture.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentPicture.length) % currentPicture.length
    );
  };

  return (
    <main>
      {currentPicture.length > 0 && (
        <div>
          <button onClick={prevImage}>Previous</button>
          <img
            src={currentPicture[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
          />
          <button onClick={nextImage}>Next</button>
        </div>
      )}
    </main>
  );
}

export default FicheLogement;
