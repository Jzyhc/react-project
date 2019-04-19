import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/style.css'

class Cssdomo extends Component{
    constructor(props){
        super(props);
        this.state={
            showFlag:true
        }
        this.toogo = this.toogo.bind(this)
    }
    toogo(){
        this.setState(()=>({
            showFlag:!this.state.showFlag
        }))
    }
    render(){
        return(
            <Fragment>
                <CSSTransition 
                     classNames="my-node"
                     in={this.state.showFlag}
                     timeout={1000}>
                    <div>
                        Hello
                    </div>
                </CSSTransition>
                <button onClick={this.toogo}>toogo</button>
            </Fragment>
        )
    }
}

export default Cssdomo;