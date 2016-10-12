/* global fetch */

export const GET = 'app/post/GET';
export const FAILED = 'app/post/FAILED';

const reducer = (state = {
    title: '',
    author: { name: '', email: '' },
    body: '',
}, action) => {
    switch (action.type) {
    case GET:
        return Object.assign({}, state, action.post);
    case FAILED:
        return {
            title: 'Fetch failed...',
            author: { name: 'null', email: 'null' },
            body: 'null',
        };
    default:
        return state;
    }
};

export default reducer;

export function getPost(id, cb = () => {}) {
    return async (dispatch) => {
        try {
            const postRes = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
            const post = await postRes.json();
            const userRes = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`);
            const user = await userRes.json();
            dispatch(gotPost(Object.assign({}, post, { author: user })));
            cb();
        } catch (err) {
            dispatch(failGetPost());
            cb();
        }
    };
}

export function gotPost(json) {
    return {
        type: GET,
        post: json,
    };
}

export function failGetPost() {
    return {
        type: FAILED,
    };
}
