import * as BoardApiUtil from '../util/board_api_util'
import { fetchUser } from '../util/user_api_util'
export const RECEIVE_USER_BOARDS = 'RECEIVE_USER_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveUserBoards = (userBoards) => ({
  type: RECEIVE_USER_BOARDS,
  userBoards
})

const receiveBoard = board => {
  return ({
    type: RECEIVE_BOARD,
    board
  })
}

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
  })

const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})

// export const fetchAllBoards = () => dispatch => {
//   return BoardApiUtil.fetchAllBoards()
//     .then((boards) => dispatch(receiveAllBoards(boards)))
// }

export const fetchBoard = (boardId) => dispatch => {
  return BoardApiUtil.fetchBoard(boardId)
    .then((board) => dispatch(receiveBoard(board)),
      errors => receiveBoardErrors(errors.responseJSON)
    )
}

export const createBoard = (board) => dispatch => {
  return BoardApiUtil.createBoard(board)
    .then((board) => dispatch(receiveBoard(board)),
      errors => receiveBoardErrors(errors.responseJSON))
}

export const deleteBoard = boardId => dispatch => BoardApiUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard(boardId)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)));


export const fetchUserBoards = (userId) => dispatch => {
  return fetchUser(userId)
    .then((user) => dispatch(receiveUserBoards(user)),
      (errors) => dispatch(receiveBoardErrors(errors.responseJSON)));
}


