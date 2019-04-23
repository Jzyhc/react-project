import React from 'react';
// { Component,Fragment }
// import { Button } from 'antd';
// import store from '../store/index'
import { connect } from 'react-redux'
import { todoListRedux,addtodoListRedux } from '../store/actionCreators'

const TodoListRedux = (props) => {
    return (
        <div>
        <label htmlFor='iptId'>输入</label>
        <input
        id = 'iptId'
        value={props.iptVla}
        onChange={props.handChange}
        />
        <button onClick={props.handClick}>提交</button>
        <ul>
            {
                props.list.map((item,index) => {
                    return  <li onClick={()=>{props.handel(index)}} key={index}>{item}</li>
                })
            }
        </ul>
    </div>
    )
   
}

// class TodoListRedux extends Component{
//     constructor(props){
//         super(props)
//         this.store = store.getState()
//         store.subscribe( this.handStore.bind(this) )
//     }
//     handStore(){
//         store.getState()
//     }
//     render(){
        
//         return(
//             <Fragment>
//                 <div>
//                     <label htmlFor='iptId'>输入</label>
//                     <input
//                     id = 'iptId'
//                     value={this.props.iptVla}
//                     onChange={this.props.handChange}
//                     />
//                     <button onClick={this.props.handClick}>提交</button>
//                     <ul>
//                         {
//                             this.props.list.map((item,index) => {
//                                 return  <li onClick={this.handel} key={index}>{item}</li>
//                             })
//                         }
//                     </ul>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// 获取store中的数据 并且赋值给props 
//通过this.props.[reducer]中的数据即可
const mapStateToProps = (state) => {
    return {
        iptVla: state.iptVla,
        list:state.list
    }
}
// store.dispatch 映射到props上 
const mapDisProps = (dispatch) => {
    return {
        handChange(e){
            console.log('eee',e.target.value)
            let value = e.target.value
            const action = todoListRedux(value)
            dispatch(action)
        },
        handClick(){
            const action = addtodoListRedux()
            dispatch(action) 
        },
        handel(e){
            console.log(e)
        }
    }
}
export default connect(mapStateToProps,mapDisProps)(TodoListRedux);