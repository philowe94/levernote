export const RECEIVE_FILTER_TAGS = 'RECEIVE_FILTER_TAGS';

export const receiveFilterTags = (tags) => ({
    type: RECEIVE_FILTER_TAGS,
    tags: tags,
});

export const updateFilterTags = (tags) => (dispatch) => {
    dispatch(receiveFilterTags(tags));
}