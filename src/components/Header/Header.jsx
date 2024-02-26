import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/LOGO-mob.svg';
import './_header.scss';

export default function Header() {
  const location = useLocation().pathname;

  function underlineIfActivePath(targetPath) {
    if (location === targetPath) {
      return 'underline';
    } else {
      return null;
    }
  }

  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt='Kasa Logo' />
      </Link>
      <nav>
        <ul>
          <Link to='/'>
            <li className={underlineIfActivePath('/')}>acceuil</li>
          </Link>
          <Link to='/a-propos'>
            <li className={underlineIfActivePath('/a-propos')}>a propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
