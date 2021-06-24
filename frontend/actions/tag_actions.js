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

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
})

const removeTag = (tagId) => ({
    type: REMOVE_TAG,
    tagId
})

//thunk action creators
export const fetchTags = () => dispatch => (
    TagApiUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
);

export const fetchTag = (tagId) => dispatch => (
    TagApiUtil.fetchTag(tagId)
    .then(tag => dispatch(receiveTag(tag)))
);

export const createTag = (tag) => dispatch => (
    TagApiUtil.createTag(tag)
    .then(tag => dispatch(receiveTag(tag)))
)

export const updateTag = (tag) => dispatch => (
    TagApiUtil.updateTag(tag)
    .then(tag=> dispatch(receiveTag(tag)))
)

export const deleteTag = (tagId) => dispatch => (
    TagApiUtil.deleteTag(tagId)
    .then(() => dispatch(removeTag(tagId)))
)