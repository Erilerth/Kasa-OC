import { Link } from 'react-router-dom';
import './_404.scss';

function Page404() {
  return (
    <main id='error-page'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to='/'>Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}

export default Page404;
