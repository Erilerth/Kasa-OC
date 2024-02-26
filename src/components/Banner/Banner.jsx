import './_banner.scss';
import PropTypes from 'prop-types';

export default function Banner({ bannerImage, bannerText }) {
  function renderBannerText() {
    if (bannerText !== '') {
      return <h2>{bannerText}</h2>;
    }
    return null;
  }

  return (
    <div className='bgImg'>
      <img src={bannerImage} alt='Banner Home' />
      {renderBannerText()}
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
