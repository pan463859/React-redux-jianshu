import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchblur = () => ({
    type: constants.SEARCH_BlUR
})

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log("error")
        })
    }
}

