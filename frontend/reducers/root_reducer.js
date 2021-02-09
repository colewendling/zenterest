import { combineReducers } from 'redux';

import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
});

export default rootReducer;

// default application state:

// {
//     entities: {... },
//     session: {... },
//     errors: {... },
//     ui: {
//       filters: {... },
//       modal: //defaults to null, will be set to a string representing which component to show
//   }
// }