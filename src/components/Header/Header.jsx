import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/LOGO-mob.svg';
import './_header.scss';

export default function Header() {
  const location = useLocation().pathname;

  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt='Kasa Logo' />
      </Link>
      <nav>
        <ul>
          <Link to='/'>
            <li className={location === '/' && 'underline'}>acceuil</li>
          </Link>
          <Link to='/a-propos'>
            <li className={location === '/a-propos' && 'underline'}>
              a propos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
