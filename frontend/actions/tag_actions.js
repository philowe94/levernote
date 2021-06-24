import * as TagApiUtil from '../util/tag_api_util';

//Export constants

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

//action creators
const receiveTags = (tag) => ({
    type: RECEIVE_TAGS,
    tags
})