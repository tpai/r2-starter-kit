import { GET as GET_POST } from 'redux/modules/post';
import { GET as GET_LIST } from 'redux/modules/list';

const reducer = (state = {
    min: 1,
    max: 1,
    now: 1
}, action) => {
    switch(action.type) {
        case GET_POST:
            return _.assign({}, state, {
                now: action.post.id
            });
        case GET_LIST:
            return _.assign({}, state, {
                max: action.list.length
            });
        default:
            return state;
    }
}

export default reducer;
