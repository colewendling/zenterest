
import React from 'react';

const BoardIndexItem = ({ board, openModal, id}) => {
  const indexImage1 = board.pins[0] ? <img src={board.pins[0].imageUrl} alt={board.title} className='preview-large' /> : <div className="preview-large-empty"></div>
  const indexImage2 = board.pins[1] ? <img src={board.pins[1].imageUrl} alt={board.title} className='preview-top' /> : <div className="preview-top-empty"></div>
  const indexImage3 = board.pins[2] ? <img src={board.pins[2].imageUrl} alt={board.title} className='preview-bottom' /> : <div className="preview-bottom-empty"></div>

  return (
    <a onClick={() => openModal(['boardShow', id])} >
      <div className='board-index-item-container'>
        <div className='board-index-item-image'>
          {indexImage1}
          <div>
            {indexImage2}
            {indexImage3}
          </div>
        </div>
        <div className="board-index-item-title">{board.title}</div>
        <div className="board-pin-count">{board.pins.length} Pins</div>
      </div>
    </a>
  )
}

export default BoardIndexItem;
