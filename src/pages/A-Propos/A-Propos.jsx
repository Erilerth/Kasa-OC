import Banner from '../../components/Banner/Banner';
import BannerAbout from '../../assets/imgs/bannerAbout.png';
import Collapsible from '../../components/Collapsible/Collapsible';
import AboutArray from '../../data/aboutArray.json';
import './_a-propos.scss';

function APropos() {
  return (
    <main className='container'>
      <Banner bannerImage={BannerAbout} />
      <section className='collapsible'>
        {AboutArray.map((rule, id) => (
          <Collapsible
            key={id}
            label={rule.Title}
            CollapsibleContent={rule.Text}
          />
        ))}
      </section>
    </main>
  );
}

export default APropos;
