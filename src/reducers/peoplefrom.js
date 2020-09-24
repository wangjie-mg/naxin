
const initstate ={
    webname:"社团报名",
    name:'',
    class:"",
    phone:"",
    desc:"",
    department:'',
    selectedTags:[],
    tagsData : []
}

export default (state = initstate,action) =>{
    switch (action.type){
        case "USER":
            return Object.assign({}, state, {
                name:action.key.name,
                class:action.key.class,
                phone:action.key.mobile,
            })
        case "OG":
            return Object.assign({}, state, {
                department:action.key.department,
                tagsData : action.key.admin
            })
        case "SELECTEDTAGS":
            return Object.assign({}, state, {
                selectedTags:action.key,
            })
        default:
            return state;
    }
}