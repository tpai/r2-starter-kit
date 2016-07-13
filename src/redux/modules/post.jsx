export const GET = 'app/post/GET';

const reducer = (state = {
    title: '',
    author: { name: '', email: '' },
    body: ''
}, action) => {
    switch (action.type) {
        case GET:
            return _.assign({}, state, action.post);
        default:
            return state;
    }
};

export default reducer;

export const getPost = (id, cb = () => {}) => {
    return async dispatch => {
        const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await res.json();
        dispatch(getAuthor(json, cb));
    }
}

export const getAuthor = (post, cb = () => {}) => {
    return async dispatch => {
        const res = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`);
        const json = await res.json();
        cb();
        dispatch(gotPost(_.assign({}, post, { author: json })));
    }
}

export const gotPost = json => {
    return {
        type: GET,
        post: json
    }
}
