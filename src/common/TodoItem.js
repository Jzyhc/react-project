import React , { Component,Fragment } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handClick=this.handClick.bind(this)
    }
    handClick(){
        const { delItme ,index } = this.props;
        delItme(index)
    //    this.props.delItme(this.props.index)
    }
    //从父组件接收参数才会执行
    // 页面上有展示的时候 再次更新才会执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps111')
    }
    componentWillUnmount(){
        console.log('页面销毁之前被执行--------componentWillUnmount')
    }
    shouldComponentUpdate(nextProps,nextState){
        // return 1;
        console.log('this.props.content2',this.props.content)
        console.log('nextProps1',nextProps.content)
        // console.log('nextState',nextState)   
        // nextProps 指nextProps 接下来Props 将会变成什么
        // nextState 指nextState 接下来将会变成什么
        if(nextProps.content !== this.props.content){
            // nextProps 是接下来要变成props的数据 比对是当前的和上一次的比对
            console.log(22)
            return true;
        }else{
            console.log(223)
            return false;
        }
    }
    render() {
        console.log('222children')
        const { content } = this.props;
        return(
            <Fragment>
                <div 
                onClick={this.handClick}
                >
                   {content}
                </div>
            </Fragment>
        )
    }
}
TodoItem.propTypes = {
    content:PropTypes.string, // 判断 content 数据类型是否为string
    test:PropTypes.string.isRequired,  // 父组件传值 必须是string 且 isRequired == 必须传值 
    contentAll:PropTypes.arrayOf(PropTypes.number,PropTypes.string), // 判断是在数组下  可以是num 和欧哲字符串
    // contentAl:PropTypes.oneOfType(PropTypes.number,PropTypes.string) // 判断是number 或者字符串
}
TodoItem.defaultProps = {
    test:'jzyhc'
}

export default TodoItem;