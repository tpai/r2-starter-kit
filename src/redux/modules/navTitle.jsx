export const SET_NAV_TITLE = 'SET_NAV_TITLE';

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_NAV_TITLE:
            return action.title;
        default:
            return state;
    }
}

export default reducer;
