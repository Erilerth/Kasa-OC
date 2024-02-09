import Banner from '../../components/Banner/Banner';
import Collapsible from '../../components/Collapsible/Collapsible';

function APropos() {
  return (
    <main className='container'>
      <Banner />
      <section id='collapsible'>
        <Collapsible />
      </section>
    </main>
  );
}

export default APropos;
