import FooterLogo from '../../assets/imgs/LOGO-footer.svg';
import './_footer.scss';

export default function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt='Kasa Logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
