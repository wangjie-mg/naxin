const initstate = {
  webname:"社团简介",
  name: "",
  department: "",
  desc: "",
  imgurl:'',
  admin: [],
};

export default (state = initstate, action) => {
  switch (action.type) {
    case "DEPART":
      return Object.assign({}, state, {
        name: action.key.name,
        department:action.key.department,
        desc:action.key.desc,
        imgurl:action.key.imgurl,
        admin:action.key.admin,
      })
    default:
      return state;
  }
};
