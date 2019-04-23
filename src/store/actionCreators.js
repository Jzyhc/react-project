import { ADD_TODO_LIST_REDUX, TODO_LIST_REDUX,ADD_SAGA_LIST, ADD_LIST_LIST, DLE_ITEM_LIST, CHANGE_INPUT_VALUETWO, CHANGE_INPUT_VALUE, ADD_BTN_LIST } from './actionType'
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
export const todoListRedux = (value)=>({
    type:TODO_LIST_REDUX,
    value
})

export const addtodoListRedux = (value)=>({
    type:ADD_TODO_LIST_REDUX,
    value
})


export const getlistFn = ()=>{
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
export const sagaList = (value)=>({
    type:ADD_SAGA_LIST,
    value
})
