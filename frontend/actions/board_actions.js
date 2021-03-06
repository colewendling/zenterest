import * as BoardAPIUtil from '../util/board_api_util'

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_ALL_USER_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const REMOVE_BOARD = 'REMOVE_BOARD';


export const receiveBoard = board => {
  return {
    type: RECEIVE_BOARD,
    board
  }
}

export const removeBoard = boardId => {
  return {
    type: REMOVE_BOARD,
    boardId
  }
}

export const receiveBoardErrors = errors => {
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  }
}

export const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
})

export const receiveAllUserBoards = userBoards => {
  return {
    type: RECEIVE_ALL_USER_BOARDS,
    userBoards
  }
}

export const fetchBoard = boardId => dispatch => BoardApiUtil.fetchBoard(boardId)
  .then(board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));

export const fetchAllUserBoards = (userId) => dispatch => BoardApiUtil.fetchAllUserBoards(userId)
  .then(boards => dispatch(receiveAllBoards(boards)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));
    
export const fetchAllBoards = () => dispatch => BoardApiUtil.fetchAllBoards()
  .then(boards => dispatch(receiveAllBoards(boards)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));
    
export const createBoard = board => dispatch => BoardApiUtil.createBoard(board)
  .then(board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));

export const updateBoard = board => dispatch => BoardApiUtil.updateBoard(board)
  .then(board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));

export const deleteBoard = boardId => dispatch => BoardApiUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard(boardId)),
  errors => dispatch(receiveBoardErrors(errors.responseJSON)));




