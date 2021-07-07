import { combineReducers } from 'redux';
import filterTagsReducer from './filter_tags_reducer';
import currentNotebookReducer from './current_notebook_reducer';


const uiReducer = combineReducers({
    filterTags: filterTagsReducer,
    currentNotebook: currentNotebookReducer,
});

export default uiReducer;