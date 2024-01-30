import PropTypes from 'prop-types';

export default function Card({ title }) {
  return (
    <div className='card'>
      <h2>{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
