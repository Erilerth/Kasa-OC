import Header from '../shared/Header';
import Footer from '../shared/Footer';
// import Banner from '../Banner';
import LogementsCards from '../LogementsCards';

export default function Home() {
  return (
    <>
      <Header />
      <main className='container'>
        {/* <Banner /> */}
        <LogementsCards />
      </main>
      <Footer />
    </>
  );
}
