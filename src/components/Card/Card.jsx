import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './_card.scss';

export default function Card({ cardImg, cardTitle, cardId }) {
  return (
    <Link to={`/logement/${cardId}`} className='card'>
      <span className='card-gradient'></span>
      <img src={cardImg} alt={cardTitle} />
      <h2>{cardTitle}</h2>
    </Link>
  );
}

Card.propTypes = {
  cardImg: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
};
