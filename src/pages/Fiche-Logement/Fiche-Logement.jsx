import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LogementData from '../../data/logements.json';
import Collapsible from '../../components/Collapsible/Collapsible';
import './_fiche-logement.scss';

export default function FicheLogement() {
  const { id } = useParams();
  const currentLogement = LogementData.find((logement) => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentPictures = currentLogement.pictures;

  const [firstName, lastName] = currentLogement.host.name.split(' ');

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
          <p className='picture-count'>
            {currentImageIndex + 1}/{currentPictures.length}
          </p>
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
        <div id='rating'>
          {[...Array(5)].map((_, index) => {
            return (
              <span
                key={index}
                className={`fa-solid fa-star ${
                  index < Number(currentLogement.rating) ? 'active' : 'inactive'
                }`}></span>
            );
          })}
        </div>
        <div id='host'>
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img
            src={currentLogement.host.picture}
            alt={`Image de ${currentLogement.host.name}`}
          />
        </div>
      </section>

      <section id='logement-description' className='collapsible'>
        <Collapsible
          label='Description'
          CollapsibleContent={currentLogement.description}
        />
        <Collapsible
          label='Équipements'
          CollapsibleContent={currentLogement.equipments.map(
            (equipment, index) => (
              <p key={index}>{equipment}</p>
            )
          )}
        />
      </section>
    </main>
  );
}
