import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const PinIndexItem = ({ pin, openModal}) => {
  
  return (
    <a onClick={() => openModal('pinShow')} >
      <div className='pin-index-item-container'>
        <div className='pin-index-item-image'>
          <img src={pin.imageUrl} alt={pin.title} />
        </div>
      </div>
    </a>
  )
}

export default PinIndexItem;
