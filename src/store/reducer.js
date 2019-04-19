import { ADD_LIST_LIST, DLE_ITEM_LIST, CHANGE_INPUT_VALUETWO, CHANGE_INPUT_VALUE, ADD_BTN_LIST } from './actionType'
const defaultState = {
    iptVla:'',
    list:[
        
      ],
    iptvlue:'4444'
};

// reducer 可以接收 state 但绝不能修改state 
export default (state = defaultState, actions)=>{
    
    if(actions.type=== ADD_LIST_LIST){
        // 对之前 state 的数据 进行深拷贝
        const newState  = JSON.parse(JSON.stringify(state))
        newState.list=actions.value;
        console.log('actions',actions)
        // 将改变好的数据 newState 进行 return[固定写法] 返回的是store里面
        return newState;
    }
    if(actions.type=== CHANGE_INPUT_VALUE){
        // 对之前 state 的数据 进行深拷贝
        const newState  = JSON.parse(JSON.stringify(state))
        newState.iptVla=actions.value;
        // 将改变好的数据 newState 进行 return[固定写法] 返回的是store里面
        return newState;
    }
    if(actions.type === CHANGE_INPUT_VALUETWO){
        const newState  = JSON.parse(JSON.stringify(state))
        newState.iptvlue = actions.value;
        return newState;
    }
    if(actions.type ===  DLE_ITEM_LIST){
        const newState  = JSON.parse(JSON.stringify(state))
        newState.list.splice(actions.index,1)
        return newState;
    }
    if(actions.type === ADD_BTN_LIST){
        const newState  = JSON.parse(JSON.stringify(state))
        if(newState.iptVla){
            newState.list.push(newState.iptVla)
        }
        if(newState.iptvlue){
            newState.list.push(newState.iptvlue)
        }        
        console.log(newState.iptVla)
        newState.iptVla = '';
        return newState;
    }
    
    console.log('state',state)
    console.log('actions',actions)
    return state;
    
}