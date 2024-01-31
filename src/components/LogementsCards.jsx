import { useContext } from 'react';
import Card from './shared/Card';
import LogementContext from '../context/LogementContext';

export default function LogementsCards() {
  const [logement] = useContext(LogementContext);

  return (
    <section className='logementsCards'>
      {logement.map((logement) => (
        <Card key={logement.id} title={logement.title} />
      ))}
    </section>
  );
}
