import React from 'react';
import './Orglist.css';
import { Avatar } from "antd";
// import { Flex  } from 'antd-mobile';
// import cookie from "react-cookies";
import Title from "../Title/Title";
// import getRequest from "../../_util/request";

import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';


class Orglist extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    console.log(this.props.location)
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
            <div style={{padding:"0 3vw"}}>
             <Title name={this.props.name} color="rgb(234,178,54)"/>
                <Flex wrap="wrap" style={{marginLeft:"3vw"}}>
                {this.props.data.map((item,index)=>{
                    return(
                      <div key={index} className="or-list">
                        <Avatar size={40}  src={item.url} />
                        <p>{item.name}</p>
                      </div>  
                    );
                })}
                </Flex>
            </div>
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
