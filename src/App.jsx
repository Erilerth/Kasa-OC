import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import FicheLogement from './components/pages/Fiche-Logement';
import APropos from './components/pages/A-Propos';
import Page404 from './components/pages/404';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/logement' element={<FicheLogement />} />
        <Route path='/a-propos' element={<APropos />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
