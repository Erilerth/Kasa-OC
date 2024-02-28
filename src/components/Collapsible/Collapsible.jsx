import { useState } from 'react';
import PropTypes from 'prop-types';
import './_collapsible.scss';

export default function Collapsible({ label, CollapsibleContent }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className='collapse'>
      <button onClick={toggle}>
        {label} <i className={`fa-solid fa-angle-up ${open && 'rotate'}`}></i>
      </button>
      {/* {open && ( */}
      <div className={`collapse-anim ${open ? 'open' : 'slide'}`}>
        <div className={`collapse-content ${open && 'open'}`}>
          <p>{CollapsibleContent}</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

Collapsible.propTypes = {
  label: PropTypes.string.isRequired,
  CollapsibleContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
};
