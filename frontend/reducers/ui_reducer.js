import { combineReducers } from 'redux';
import filterTagsReducer from './filter_tags_reducer';


const uiReducer = combineReducers({
    filterTags: filterTagsReducer,

});

export default uiReducer;