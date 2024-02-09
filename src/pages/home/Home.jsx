import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import LogementContext from '../../context/LogementContext';
import './_home.scss';

export default function Home() {
  const [logement] = useContext(LogementContext);

  return (
    <>
      <main className='container'>
        <Banner />
        <section id='logementsCards'>
          {logement.map((logement) => (
            <Link to={`/logement/${logement.id}`} key={logement.id}>
              <Card>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
