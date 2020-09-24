const initstate ={
    webname:"社团审核",
    list:[]
}

export default (state = initstate,action) =>{
    switch (action.type){
        case "UPLI":
            return Object.assign({}, state, {
                list:action.key,
            })
        default:
            return state;
    }
}