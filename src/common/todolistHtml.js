import React, { Fragment } from 'react';
// import React, { Component,Fragment } from 'react';
import { Input, Button, List  } from 'antd';
import 'antd/dist/antd.css';

const TodolistHtml = (props)=>{
    return (
        <Fragment >
            <div style={{paddingTop:'10px'}}>
                <Input
                    placeholder="TodoList"
                    value={props.iptVla} 
                    style={{width:'300px',marginRight:'10px'}} 
                    onChange={props.handChange}
                />
                 <Input
                    placeholder="TodoList"
                    value={props.iptvlue} 
                    style={{width:'300px',marginRight:'10px'}} 
                    onChange={props.handChangeTwo}
                />
                
                <Button type="primary"
                onClick={props.handClick}
                >提交</Button>
                <List
                    style={{marginTop:'10px',width:'300px'} }
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{props.handItemCLick(index)}}>{item}</List.Item>)}
                    />
            </div>  
        </Fragment>
    )
}

// class TodolistHtml extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//         }
//     }
//     render(){
//         return (
//             <Fragment >
//                 <div style={{paddingTop:'10px'}}>
//                     <Input
//                         placeholder="TodoList"
//                         value={this.props.iptVla} 
//                         style={{width:'300px',marginRight:'10px'}} 
//                         onChange={this.props.handChange}
//                     />
//                      <Input
//                         placeholder="TodoList"
//                         value={this.props.iptvlue} 
//                         style={{width:'300px',marginRight:'10px'}} 
//                         onChange={this.props.handChangeTwo}
//                     />
                    
//                     <Button type="primary"
//                     onClick={this.props.handClick}
//                     >提交</Button>
//                     <List
//                         style={{marginTop:'10px',width:'300px'} }
//                         // header={<div>Header</div>}
//                         // footer={<div>Footer</div>}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handItemCLick(index)}}>{item}</List.Item>)}
//                         />
//                 </div>  
//             </Fragment>
//         )
//     }
// }

export default TodolistHtml;