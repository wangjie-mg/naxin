
const initstate ={
    a:8888
}

export default (state = initstate,action) =>{
    switch (action.type){
        case "ADD":
            return {
                a:action.key
            }
        default:
            return state;
    }
}