import img from "./shengqin.png"
// import headimg from "./shetuan.png" 
const initstate ={
    webname:"社团纳新",
    isadmin:true,
    isload:false,
    isreview:false,
    appdata:[{url:img,name:"创建社团",to:"/orgfrom/"}],
    data:[{url:"http://teacher.xupt.org/pic/images/E7rjZ5Z04R1DFQVyDLeI4_wd.jpg",
            name:"西邮创新创业协会"            
            },{url:"http://teacher.xupt.org/pic/images/E7rjZ5Z04R1DFQVyDLeI4_wd.jpg",
            name:"西邮创新创业协会"            
            },{url:"http://teacher.xupt.org/pic/images/E7rjZ5Z04R1DFQVyDLeI4_wd.jpg",
            name:"西邮创新创业协会"            
            },{url:"http://teacher.xupt.org/pic/images/E7rjZ5Z04R1DFQVyDLeI4_wd.jpg",
            name:"西邮创新创业协会"            
            },
        ],
}

export default (state = initstate,action) =>{
    switch (action.type){
        
        case "SETDATA":
            return Object.assign({}, state, {
                data: action.key
              })
        default:
            return state;
    }
}