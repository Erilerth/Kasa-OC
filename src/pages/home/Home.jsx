import { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import BannerHome from '../../assets/imgs/bannerHome.png';
import Card from '../../components/Card/Card';
import LogementContext from '../../context/LogementContext';
import './_home.scss';

export default function Home() {
  const [logement] = useContext(LogementContext);

  let text = 'partout et ailleurs';
  text = text.replace(/ /g, '\u00A0');
  const bannerText = `Chez Vous, ${text}`;

  return (
    <>
      <main className='container'>
        <Banner bannerImage={BannerHome} bannerText={bannerText} />

        <section id='logementsCards'>
          {logement.map((logement) => (
            <Card
              cardImg={logement.cover}
              cardTitle={logement.title}
              cardId={logement.id}
              key={logement.id}
            />
          ))}
        </section>
      </main>
    </>
  );
}
