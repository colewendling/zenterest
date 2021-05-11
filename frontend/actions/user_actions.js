import * as UsersApiUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';


const receiveUser = user => ({
    type: RECEIVE_USER,
    users
});

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const fetchUser = userId => dispatch => (
    UsersApiUtill.fetchUser(userId).then(
        user => dispatch(receiveUser(user))
    )
);


export const fetchAllUsers = () => dispatch => (
    UsersApiUtil.fetchAllUsers().then(
        users => dispatch(receiveAllUsers(users))
    )
);