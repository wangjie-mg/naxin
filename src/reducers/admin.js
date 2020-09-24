const initstate ={
    webname:"添加管理",
    list:[]
}

export default (state = initstate,action) =>{
    switch (action.type){
        case "USER":
            return Object.assign({}, state, {
                list: action.key,
              });
        default:
            return state;
    }
}