import { useParams, Navigate } from 'react-router-dom';
import LogementData from '../../data/logements.json';
import Collapsible from '../../components/Collapsible/Collapsible';
import './_fiche-logement.scss';
import Caroussel from '../../components/Caroussel/Caroussel';

export default function FicheLogement() {
  const { id } = useParams();
  const currentLogement = LogementData.find((logement) => logement.id === id);
  const currentPictures = currentLogement.pictures;

  if (currentLogement === undefined) {
    return <Navigate to='/404' />;
  }

  const [firstName, lastName] = currentLogement.host.name.split(' ');

  return (
    <main id='fiche-logement' className='container'>
      <Caroussel currentPictures={currentPictures} />

      <div className='infos'>
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
                    index < Number(currentLogement.rating)
                      ? 'active'
                      : 'inactive'
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
      </div>

      <section id='logement-description' className='collapsible'>
        <Collapsible
          label='Description'
          CollapsibleContent={currentLogement.description}
        />
        <Collapsible
          label='Équipements'
          CollapsibleContent={currentLogement.equipments.map(
            (equipment, index) => (
              <span key={index}>{equipment}</span>
            )
          )}
        />
      </section>
    </main>
  );
}
