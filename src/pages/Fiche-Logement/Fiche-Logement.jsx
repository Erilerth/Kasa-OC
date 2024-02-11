import { useParams } from 'react-router-dom';
import LogementData from '../../data/logements.json';

function FicheLogement() {
  const { id } = useParams();

  const currentLogement = LogementData.find((logement) => logement.id === id);

  return (
    <>
      <p>Fiche-Logement</p>
    </>
  );
}

export default FicheLogement;
