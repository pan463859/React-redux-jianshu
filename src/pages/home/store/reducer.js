import { fromJS, merge } from 'immutable'
//immutable库
//immutable对象
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
        },
        {
            id: 2,
            title: '手绘',
        }
    ]
})
export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}