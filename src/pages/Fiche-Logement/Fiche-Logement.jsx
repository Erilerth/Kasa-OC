import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../data/logements.json';
import './_fiche-logement.scss';

export default function FicheLogement() {
  const { id } = useParams();
  const currentLogement = LogementData.find((logement) => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentPictures = currentLogement.pictures;

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
    <main id='fiche-logement' className='container'>
      {currentPictures.length > 0 && (
        <div id='carousel'>
          <button
            onClick={prevImage}
            className='fa-solid fa-angle-left'></button>
          <img
            src={currentPictures[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
          />
          <button
            onClick={nextImage}
            className='fa-solid fa-angle-right'></button>
        </div>
      )}

      <section id='logement-infos'>
        <h2 id='logement-title'>{currentLogement.title}</h2>
        <h3 id='logement-location'>{currentLogement.location}</h3>
        <div id='logement-tags'>
          {currentLogement.tags.map((tag, index) => (
            <p key={index} className='tag'>
              {tag}
            </p>
          ))}
        </div>
      </section>

      <section id='rating-host'>
        <div id='host'>
          <p>{currentLogement.host.name}</p>
          <img
            src={currentLogement.host.picture}
            alt={`Image de ${currentLogement.host.name}`}
          />
        </div>
      </section>
      <section id='logement-description'></section>
    </main>
  );
}
