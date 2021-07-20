import React from 'react';

const BoardIndexItem = ({ board, openModal, id}) => {
  return (
    <a onClick={() => openModal( ['boardShow', id] )} >
      <div className='board-index-item-container'>
      </div>
    </a>
  )
}

export default BoardIndexItem;
