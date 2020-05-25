import actions from './actionType.js';

export const saveNewItem = (value, id) => (dispatch) => {
    dispatch(
        { type: actions.ADD_ITEM,
            payload: {
                sectionId: id,
                label: value,
                itemId: Math.random().toString(30).substr(4)
            }
        });
}

export const removeItem = (index, sectionId) => dispatch => {
    dispatch({ type: actions.REMOVE_ITEM, payload: { sectionId, index }});
}

export const updateItemDetails = (sectionId, newValue, itemId) => dispatch => {
    dispatch({ type: actions.UPDATE_ITEM, payload: {sectionId, newValue, itemId}});
}

export const showSection = sectionId => dispatch => {
    dispatch({ type: actions.SHOW_SECTION, payload: {sectionId} });
}

export const hideSection = sectionId => dispatch => {
    dispatch({ type: actions.HIDE_SECTION, payload: {sectionId} });
}
