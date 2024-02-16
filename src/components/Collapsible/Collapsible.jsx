import { useState } from 'react';
import PropTypes from 'prop-types';
import './_collapsible.scss';

export default function Collapsible({ label, CollapsibleContent }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div>
      <button onClick={toggle}>
        {label} <i className='fa-solid fa-angle-up'></i>
      </button>
      {open && (
        <div className='collapse-content'>
          <p>{CollapsibleContent}</p>
        </div>
      )}
    </div>
  );
}

Collapsible.propTypes = {
  label: PropTypes.string.isRequired,
  CollapsibleContent: PropTypes.string.isRequired,
};
