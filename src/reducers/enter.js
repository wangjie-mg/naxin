const initstate ={
    webname:"报名详情",
    alist:[],
}

export default (state = initstate,action) =>{
    switch (action.type){
        case "USER":
            return Object.assign({}, state, {
                alist: action.key,
              });
        default:
            return state;
    }
}