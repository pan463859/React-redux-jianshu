import * as constants from './constants'
import { fromJS } from 'immutable'
//immutable库
//immutable对象
const defaultState = fromJS({
    focused: false
})
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    else if (action.type === constants.SEARCH_BlUR) {
        return {
            focused: false
        }
    }
    return state
}