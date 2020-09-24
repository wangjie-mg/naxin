

const initstate = {
  webname: "社团纳新",
  isadmin: false,
  isload: false,
  isreview: false,
  deportment:'',
  orgdata:[],
  data: [
    
  ],
};

export default (state = initstate, action) => {
  switch (action.type) {
    case "SETDATA":
      return Object.assign({}, state, {
        data: action.key,
      });
    case "UPORG":
      return Object.assign({}, state, {
        orgdata: action.key,
      });
    case "UPSTATE":
      return Object.assign({}, state, {
        isadmin: action.key.isadmin,
        isload: action.key.isload,
        isreview: action.key.isreview,
        deportment:action.key.deportment,
        // data: action.key,
      });
    default:
      return state;
  }
};
