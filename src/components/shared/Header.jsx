import { Link } from 'react-router-dom';
import logo from '../../imgs/LOGO-mob.svg';
import PropTypes from 'prop-types';

export default function Header(activeH, activeA) {
  return (
    <header className='container'>
      <Link to='/'>
        <img src={logo} alt='Kasa Logo' />
      </Link>
      <nav>
        <ul>
          <Link to='/'>
            <li className={activeH ? 'underline' : ''}>ACCUEIL</li>
          </Link>
          <Link to='/a-propos'>
            <li className={activeA ? 'underline' : ''}>A PROPOS</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  activeH: PropTypes.bool.isRequired,
  activeA: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  activeH: false,
  activeA: false,
};
