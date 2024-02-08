import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement';
import APropos from './pages/A-Propos/A-Propos';
import Page404 from './pages/404/404';
import { LogementProvider } from './context/LogementContext';
import './utils/styles/_style.scss';

function App() {
  return (
    <LogementProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/logement/:id' element={<FicheLogement />} />
          <Route path='/a-propos' element={<APropos />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </LogementProvider>
  );
}

export default App;
