import React from 'react';
import './styles.css';

function Button(events) {
  const {type='button', children, ...props} = events;

  
  return (<>
    <button {...props} type={type} className="btn">
      {children}
    </button>
  </>);
}

export default Button;
