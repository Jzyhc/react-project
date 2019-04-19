import { ADD_LIST_LIST, DLE_ITEM_LIST, CHANGE_INPUT_VALUETWO, CHANGE_INPUT_VALUE, ADD_BTN_LIST } from './actionType'
import axios from 'axios'
export const delItem = (index)=>({
    type:DLE_ITEM_LIST,
    index
})
export const getIptValTwo = (value)=>({
    type:CHANGE_INPUT_VALUETWO,
    value
})

export const addbtn = ()=>({
    type:ADD_BTN_LIST,
    // value
})
export const getIptVal = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const addList = (value)=>({
    type:ADD_LIST_LIST,
    value
})
export const getlistFn = (value)=>{
    return (dispatch) => {
        axios.get('https://api.myjson.com/bins/of6pw').then((data)=>{
            console.log('data',data.data)
            const entries = Object.entries(data.data)
            let arr = [...entries[0],...entries[1]]
            console.log(arr)
            const action = addList(arr)
            dispatch(action)
        }).catch((err)=>{
            console.log('err',err)
        })
    }
}