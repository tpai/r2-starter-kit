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
        const postRes = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await postRes.json();
        const userRes = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await userRes.json();
        cb();
        dispatch(gotPost(_.assign({}, post, { author: user })));
    }
}

export const gotPost = json => {
    return {
        type: GET,
        post: json
    }
}
