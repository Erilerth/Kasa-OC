import { Link } from 'react-router-dom';
import logo from '../../imgs/LOGO-mob.svg';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='Kasa Logo' />
      </Link>
      <nav>
        <ul>
          <Link to='/'>
            <li>ACCUEIL</li>
          </Link>
          <Link to='/a-propos'>
            <li>A PROPOS</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
