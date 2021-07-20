import React from 'react';

const BoardIndexItem = ({ board, openModal, id}) => {
  return (
    <a onClick={() => openModal(['boardShow', id])} >
      <div className='board-index-item-container'>
        <h1>{board.title}</h1>
      </div>
    </a>
  )
}

export default BoardIndexItem;
