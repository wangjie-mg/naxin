import React from 'react';
import './Orglist.css';
import { Avatar,message } from "antd";
import Title from "../Title/Title";
import getRequest from "../../_util/request"


import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';


class Orglist extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    
    const url = {
        method: "post",
        url: "/api/findog",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
          department:""
        }
      };
      getRequest(url, this.data.bind(this));
  }
  data=(req)=>{
    const {code} =req.data;
    if(code === true){
      this.props.setdata(req.data.organiza)
    }else if(code === 500){
      message.error(req.data.msg,3)
    }else{
      message.error("网络错误",2);
    }
  }
  render(){
    return(
        <>
            <div style={{padding:"0 3vw"}}>
             <Title name={this.props.name} color="rgb(234,178,54)"/>
                <Flex wrap="wrap" style={{marginLeft:"3vw"}}>
                {this.props.data.map((item,index)=>{
                    return(
                      <Link to={{pathname:'/org',state:{department:item.department}}}>
                        <div key={index} className="or-list">
                          <Avatar size={40}  src={item.imgurl} />
                          <p>{item.department}</p>
                        </div>
                      </Link>  
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
