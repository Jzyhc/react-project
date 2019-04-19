import TodoItem from './TodoItem';
import Cssdomo from './Cssdomo';

import React, { Component,Fragment } from 'react';
import axios from 'axios'
// import './App.css';
import '../css/style.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      // list:['学习英语','学习数学']
      list:[]
    }
  }
  handIpt(e){
    // console.log('666',this.ipt)
    let val = e.target.value
    this.setState(()=>(
      {inputValue:val}
    ))
    // this.setState({
    //   inputValue:e.target.value
    // })
  }
  handBtnClick(){
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:""
    }),()=>{
      console.log(this.ul.querySelectorAll('div'))
    })
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:""
    // })
  }
  handDelClick(index){
  //  const list = [...this.state.list];
  //  list.splice(index,1)
  //  this.setState({
  //    list:list
  //  })
   this.setState((prevState)=>{
    const list = [...prevState.list];
    list.splice(index,1)
    return{list}
   })
    console.log(index)
  }
  getTodolist(){
    return this.state.list.map((item,index)=>{
      return (
        <div  key={index}>
          <TodoItem
            content={item}
            index={index}
            // test='222s'
            delItme={this.handDelClick.bind(this)}
            />
        </div>
        
      )
    })
  }
  // 组件在被挂载之前执行
  componentWillMount(){
    console.log('组件在被挂载之前执行---componentWillMount')
  }
  // 组件在被挂载之后执行
  componentDidMount(){
    axios.get('/api/add')
    .then(()=>{
      console.log('res')
    })
    .catch(()=>{
      console.log('error')
    })
    console.log('组件在被挂载之后执行---componentWillMount')
  }
  // 组件在被更新之前执行 必须返回一个值  true 是会被更新  flase是不会被更新 
  shouldComponentUpdate(){
    console.log('组件在被更新之前执行---shouldComponentUpdate')
    return 1;
  }
  // 组件在被更新之前自动执行 在shouldComponentUpdate才会执行
  //  返回true的时候会自动执行 返回flase 则不会执行
  componentWillUpdate(){
    console.log('组件在被更新之前自动执行---componentWillUpdate')
  }
  // 组件在被更新之后执行
  componentDidUpdate(){
    console.log('组件在被更新之后执行---componentDidUpdate')
  }
  //从父组件接收参数才会执行
  // 页面上有展示的时候 再次更新才会执行
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  // 页面销毁之前被执行
  componentWillUnmount(){
    console.log('页面销毁之前被执行--------componentWillUnmount')
}
  render() {
    console.log('render')
    return(
      <Fragment>
      <div>
        <label htmlFor = 'iptId'>lable属性</label>
        <input
          id='iptId'
          className='input'
          value={this.state.inputValue} 
          onChange={this.handIpt.bind(this)}
          ref={(ipt)=>{this.ipt=ipt}}
        />
        <button onClick={this.handBtnClick.bind(this)}>提交</button>
        <ul ref={(ul)=>{this.ul=ul}}>
          { this.getTodolist() }
        </ul>
        <Cssdomo></Cssdomo>
      </div>
      </Fragment>
    )
  }
}

export default App