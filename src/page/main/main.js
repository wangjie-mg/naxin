import React from 'react';
import './main.css';
import { message  } from "antd";
import cookie from "react-cookies";
import Orglist from "../../component/Orglist/Orglist"
import queryString from "query-string";

import Orgshow from "../../component/Orgshow/Orgshow"
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"

import getRequest from "../../_util/request"
import { connect } from 'react-redux';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    let params = queryString.parse(this.props.location.search);
    if(!cookie.load('token') || !cookie.load('userid') || !cookie.load('time')  || Date.parse(new Date())-cookie.load('time')>7200000){
      const url = {
        method: "post",
        url: "/api/wxid",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          code: params.code,
        },
    };
    getRequest(url, this.data.bind(this,1));
    }else{
        const url = {
          method: "post",
          url: "/api/state",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: {
            token:cookie.load('token'),
            userid:cookie.load('userid'),
          },
      };
      getRequest(url, this.data.bind(this,2));
    }
  }

  data = (a,req) => {
      const {code,isadmin,isload} =req.data;
      if(code === true){
        if(a===1){
          cookie.save("token", req.data.token, { path: "/" },{ expires: 7000 });
          cookie.save("userid",req.data.userid,{ path: "/" });
          cookie.save("time", Date.parse(new Date()), { path: "/" });
        }        
        this.props.upstate(req.data)
      }else if(code === 500){
        message.error(req.data.msg,3)
      }else{
        message.error("网络错误",2);
      }
      if(isadmin ||isload){
        const url = {
          method: "post",
          url: "/api/findog",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: {
            department: req.data.department,
          },
        };
        getRequest(url, this.orgdata.bind(this));
      }
  }
  orgdata =(req)=>{
    const {code} = req.data;
    if(code === true){
      this.props.uporgdata(req.data.organiza)
    }else if(code === 500){
      message.error(req.data.msg,3)
    }else{
      message.error('网络错误请重新进入',2);
    }
  }
  render(){
  
    const part = <Orgshow name={this.props.isload?"管理社团":"申请社团进度"}/>;
    return(
        <>
          <div style={{minHeight:568}}>
          <Header name={this.props.webname} isreview={this.props.isreview} />
          {this.props.isadmin||this.props.isload ? part: '' }
          <Orglist name="社团列表" />
          </div>
          
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
  isreview:main.isreview,
  department:main.department
}),
(dispath)=>({
    upstate(data){  
      dispath({"type":"UPSTATE","key":data})
    },
    uporgdata(data){
      dispath({"type":"UPORG","key":data})
    }
})

)(Main);
