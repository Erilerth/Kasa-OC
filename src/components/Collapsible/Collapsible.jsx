import { useState } from 'react';
import PropTypes from 'prop-types';
import './_collapsible.scss';

export default function Collapsible(props) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div>
      <button onClick={toggle}>
        {props.label} <i className='fa-solid fa-angle-up'></i>
      </button>
      {open && <div className='collapse-content'>{props.children}</div>}
    </div>
  );
}

Collapsible.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};
