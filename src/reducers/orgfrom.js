
const initstate ={
    webname:"创建社团",
    fileList:[],
    imgurl:"",
    name:"wangjie",
    department:'',
    desc:'',
    phone:'',
    userid:'',
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
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
        case "IMGURL":
            return Object.assign({}, state, {
                inputVisible:action.key
            })
        case "IMGURL":
            return Object.assign({}, state, {
                imgurl:action.key
            })
        default:
            return state;
    }
}