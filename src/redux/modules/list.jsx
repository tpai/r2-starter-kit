export const GET = 'app/list/GET';

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET:
            return action.list;
        default:
            return state;
    }
}

export default reducer;

export const getList = cb => {
    return async dispatch => {
        const res = await fetch(`http://jsonplaceholder.typicode.com/posts`);
        const json = await res.json();
        cb();
        dispatch(gotList(json));
    }
}

export const gotList = json => {
    return {
        type: GET,
        list: json
    }
}
