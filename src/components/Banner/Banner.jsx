import './_banner.scss';
import PropTypes from 'prop-types';

export default function Banner({ bannerImage, bannerText }) {
  return (
    <div className='bgImg'>
      <img src={bannerImage} alt='Banner Home' />
      {bannerText !== '' ? <h2>{bannerText}</h2> : null}
    </div>
  );
}

Banner.propTypes = {
  bannerImage: PropTypes.string,
  bannerText: PropTypes.string,
};

Banner.defaultProps = {
  bannerText: '',
};
