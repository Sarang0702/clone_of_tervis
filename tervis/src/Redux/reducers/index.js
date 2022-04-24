import {combineReducers} from 'redux';
import cat_name_reducer from './cat_name_reducer';
const reducers = combineReducers({
    catName:cat_name_reducer
})
export default reducers;