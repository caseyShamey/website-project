import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import './InfoIcon.css';
import infoIcon from '../../images/information-icon.png';

const InfoIcon = props => {
  return (
    <Tippy className="infoIcon" content="Test">
      <img src={infoIcon} />
    </Tippy>
  )
}

export default InfoIcon;