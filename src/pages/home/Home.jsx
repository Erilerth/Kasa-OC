import { useContext } from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/Card/Card';
import LogementContext from '../../context/LogementContext';
import './_home.scss';

export default function Home() {
  const [logement] = useContext(LogementContext);
  console.log(logement);

  return (
    <>
      <main className='container'>
        <Banner />
        <section className='logementsCards'>
          {logement.map((logement) => (
            <Card key={logement.id}>
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}
