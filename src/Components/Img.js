import React, { useState } from 'react';

export default function Img(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ set to true
    setIsActive(true);
  };

  var show = isActive ? 'hide' : 'block';

  return (
    <div className={'grid-item ' + show}>
      <button type="button" className="btn-close" aria-label="Close"
        onClick = {handleClick}
      ></button>      
      <img src={props.url} alt=""/>
    </div>
  );
}

