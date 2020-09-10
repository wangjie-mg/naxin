import React from 'react';
import './main.css';
import { message } from "antd";
import cookie from "react-cookies";
import Orglist from "../../component/Orglist/Orglist"

import Orgshow from "../../component/Orgshow/Orgshow"
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import Application from "../../component/Application/Application"

// import Title  from "../../component/Title/Title"1
// import getRequest from "../../_util/request";

// import headerurl from './shetuan.png'
import { connect } from 'react-redux';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    // let params = queryString.parse(this.props.location);
    // console.log(this.props.location)
    // const url = {
    //     method: "post",
    //     url: "/api/wxid",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     data: {
    //       // code: params.code,
    //     },
    //   };
    //   getRequest(url, this.data.bind(this));
  }

  data = (req) => {
      const {code} =req.data;
      if(code === true){
        cookie.save("token", req.data.token, { expires: 7000 });
        localStorage.setItem("userid",req.data.userid); 
      }else{
        message.error("网络错误",2);
      }
  }
  
  render(){
    console.log(this.props.isadmin)
    const part = <Orgshow name={this.props.isload?"管理社团":"申请社团进度"}/>;
    return(
        <>
          <Header name={this.props.webname} isreview={this.props.isreview} />
          <Application name="可用服务" />  
          
          {this.props.isadmin ? part: '' }
          <Orglist name="社团列表" /> 
            <Footer />
        </>
    )
  }

}

export default connect(
({main})=>({
  webname:main.webname,
  isadmin:main.isadmin,
  isload:main.isload,
  isreview:main.isreview
}),
(dispath)=>({
    add(){  
      dispath({"type":"ADD","key":"1"})
    },
    d(a){
      dispath({"type":"qee","key":a})
    }
})

)(Main);
