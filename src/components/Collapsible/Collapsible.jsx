import { useState } from 'react';
import './_collapsible.scss';

export default function Collapsible() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div>
      <button onClick={toggle}>
        toggle <i className='fa-solid fa-angle-up'></i>
      </button>
      {open && <div className='collapse-content'>content</div>}
    </div>
  );
}
