import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { Input, Button, List  } from 'antd';
import store from '../store/index'
import TodolistHtml from './todolistHtml'
// import { DLE_ITEM_LIST, CHANGE_INPUT_VALUETWO, ADD_BTN_LIST } from '../store/actionType'

import { getlistFn,getIptVal, delItem, getIptValTwo, addbtn } from '../store/actionCreators'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list : store.getState().list,
            iptVla:store.getState().iptVla,
            iptvlue:store.getState().iptvlue
        }
        this.handChange = this.handChange.bind(this)
        this.handSroreChange = this.handSroreChange.bind(this)
        this.handClick = this.handClick.bind(this)
        this.handChangeTwo = this.handChangeTwo.bind(this)
        this.handItemCLick = this.handItemCLick.bind(this)
        
        
        // store 中数据改变的时候 store.subscribe() 就会被调用 里面就可以调用组件的方法
        store.subscribe( this.handSroreChange)
    }
    componentDidMount(){
        const action = getlistFn()
        store.dispatch(action)
        console.log('222',action)
    }
    handChange(e){
        // 创建一个action 对象
        const action = getIptVal(e.target.value)
        // 将上面的对象传给 store
        store.dispatch(action)
        
    }
    handChangeTwo(e){
        console.log(22,e)
        const action = getIptValTwo(e.target.value)
        store.dispatch(action)
    }
    handClick(e){
        // 传list给store
        const action = addbtn();
        store.dispatch(action)
    }
    handSroreChange(){
        // console.log(1)
        this.setState(store.getState())
        console.log('2',this.state.list)
    }
    handItemCLick(index){
        console.log(index);
        const action = delItem(index)
        store.dispatch(action)
    }
    render(){
        return (
            <TodolistHtml
            iptVla={this.state.iptVla}
            handChange={this.handChange}
            iptvlue = {this.state.iptvlue}
            handChangeTwo={this.handChangeTwo}
            handClick = {this.handClick}
            list = {this.state.list}
            handItemCLick = {this.handItemCLick}
            />
        )
    }
}

export default TodoList;