import { useLocation } from 'react-router-dom';
import bannerHome from '../../assets/imgs/bannerHome.png';
import bannerBg from '../../assets/imgs/bannerAbout.png';
import './_banner.scss';

export default function Banner() {
  const location = useLocation().pathname;

  let text = 'partout et ailleurs';
  text = text.replace(/ /g, '\u00A0');

  const bannerImg = () => {
    if (location === '/') return <img src={bannerHome} alt='Banner Home' />;
    if (location === '/a-propos')
      return <img src={bannerBg} alt='Banner Home' />;
  };

  return (
    <div className='bgImg'>
      {bannerImg()}
      <h2>Chez vous, {text}</h2>
    </div>
  );
}
