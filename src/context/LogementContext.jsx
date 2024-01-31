import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Logements from '../data/logements.json';

const LogementContext = createContext();

export function LogementProvider({ children }) {
  const [logement] = useState(Logements);

  return (
    <LogementContext.Provider value={useState(logement)}>
      {children}
    </LogementContext.Provider>
  );
}

LogementProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LogementContext;
