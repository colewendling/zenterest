import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './session_reducer';
import errorsReducer from './errors_reducer'; 

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionErrorsReducer,
    errors: errorsReducer,
});

export default rootReducer;

// default application state:

// {
//     entities: {
//         users: { }
//     },
//     session: {
//         id: null,
//   },
//     errors: {
//         session: []
//     }
// }