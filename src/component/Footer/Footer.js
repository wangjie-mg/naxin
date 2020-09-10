import React from 'react';
import './Footer.css';
import { Layout } from "antd";
// import { Flex,  } from 'antd-mobile';
// import cookie from "react-cookies";

// import getRequest from "../../_util/request";

import { connect } from 'react-redux';
const { Footer} = Layout;
// import { Flex } from 'antd-mobile';


class Orglist extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    // console.log(this.props.location)
    // const url = {
    //     method: "post",
    //     url: "/api/findog",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   };
    //   getRequest(url, this.data.bind(this));
  }
  // data=(req)=>{
  //   const {code} =req.data;
  //   if(code === true){
  //     this.props.setdata(req.organiza)
  //   }else{
  //     message.error("网络错误",2);
  //   }
  // }

 
  
  render(){

    
    return(
        <>
        <Footer style={{marginTop:"3vw", borderTop: "1px solid #ccc", textAlign: "center",background:'#06060b' }}>
            <div className="footer">
                <div className="fcenter">
                    <h3>联系我们</h3>
                    <div>联系电话： <span> (029) 88166083 </span></div>
                    <div  style={{padding:'15px 0 0 0'}}>
                    技术支持 ©2020 西安邮电大学信息中心
                    <span style={{ color: "rgb(59, 126, 189)" }}> 智邮普创工作室</span>
                    </div>
                </div>
            </div>
        </Footer>
        </>
    )
  }

}

export default connect(
({main})=>({
    data:main.data,
}),
(dispath)=>({
    setdata(data){
        dispath({"type":"SETDATA","key":data})
    },
})

)(Orglist);
