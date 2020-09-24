const initstate ={
    webname:"创建社团",
    fileList:[],
    imgurl:"",
    name:"",
    department:'',
    desc:'',
    phone:'',
    tags: [],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: '',
}
export default (state = initstate,action) =>{
    switch (action.type){
        case "FILE":
            return Object.assign({}, state, {
                fileList:action.key
              })
        case "IMGURL":
            return Object.assign({}, state, {
                imgurl:action.key
            })
        case "TAGS":
            return Object.assign({}, state, {
                tags:action.key
            })
        case "INPUTVB":
            return Object.assign({}, state, {
                inputVisible:action.key
            })
        case "INPUTVA":
            return Object.assign({}, state, {
                inputValue:action.key
            })
        case "EDITI":
            return Object.assign({}, state, {
                editInputIndex:action.key
            })
        case "EDITV":
            return Object.assign({}, state, {
                editInputValue:action.key
            })
        case "USER":
            return Object.assign({}, state, {
                name:action.key.name,
                phone:action.key.mobile,
            })
        default:
            return state;
    }
}