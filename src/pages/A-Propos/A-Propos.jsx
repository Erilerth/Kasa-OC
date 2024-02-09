import Banner from '../../components/Banner/Banner';
import Collapsible from '../../components/Collapsible/Collapsible';
import AboutArray from '../../data/aboutArray.json';
import './_a-propos.scss';

function APropos() {
  return (
    <main className='container'>
      <Banner />
      <section className='collapsible'>
        {AboutArray.map((rule, id) => (
          <Collapsible key={id} label={rule.Title}>
            <p>{rule.Text}</p>
          </Collapsible>
        ))}
      </section>
    </main>
  );
}

export default APropos;
