import React from 'react';
import './enter.css';
import { message } from "antd";
import cookie from "react-cookies";
import getRequest from "../../_util/request";

import { connect } from 'react-redux';


class Enter extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    // let params = queryString.parse(this.props.location.search);
    const url = {
        method: "post",
        url: "/api/wxuser",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          // code: params.code,
        },
      };
      getRequest(url, this.data.bind(this));
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
    return(
        <>
            <h1>{this.props.a}</h1>
            <button onClick={()=>{
                this.props.add();
            }}>sdaasdasda</button>
        </>
    )
  }

}

export default connect(
({enter})=>({
    a:enter.a
}),
(dispath)=>({
    add(){
      dispath({"type":"ADD","key":"1"})
    }
})

)(Enter);
