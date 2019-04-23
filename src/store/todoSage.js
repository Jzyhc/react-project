import {  put, takeEvery } from 'redux-saga/effects'
import { ADD_SAGA_LIST } from './actionType'
import axios from 'axios'
import { sagaList } from '../store/actionCreators'
//必须使用generator() 函数
//使用 generator() 函数 就不要使用promise函数了
function* sagaListAjax(){
    
    try {
        const res = yield  axios.get('https://api.myjson.com/bins/of6pw')
        const entries = Object.entries(res.data)
        let arr = [...entries[0],...entries[1]]
        if(arr){
            const action = sagaList(arr)
            put(action)
        }
    } catch (error) {
        console.log(error)
    }
}
function* todoSage() {
    yield takeEvery(ADD_SAGA_LIST,sagaListAjax)
}

export default todoSage;