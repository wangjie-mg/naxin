import React from 'react';
import './org.css';
import { Image,Divider,Tag,Button, message,Input } from 'antd';
import { connect } from 'react-redux';
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { Link } from 'react-router-dom';
import getRequest from "../../_util/request"
import cookie from "react-cookies";

class Org extends React.Component{
     
  constructor(props){
      super(props);
      this.state={ }
  }
  componentDidMount(){
    
    if(!cookie.load('userid') || !cookie.load('token')){
        this.props.history.push('/')
    }
    const url = {
        method: "post",
        url: "/api/findog",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          token: cookie.load('token'),
          department: this.props.location.state.department,
        },
      };
      getRequest(url, this.data.bind(this));
  }
  data=(req)=>{
      const {code} = req.data;
      if(code === true){
        this.props.depart(req.data.organiza[0])
      }else if(code === 500){
        message.error(req.data.msg,3)
      }else{
          message.error('网络错误',3);
      }
  }

  render(){
    
    return(
        <> 
        <Header name={this.props.webname} isreview={false} />
        <div style={{minHeight:568}}>

        <div
            className="org-head"
        >
            <Image
                width={65}
                src={this.props.imgurl}
            />
            <p>{this.props.department}</p>
        </div>
        <Divider />
        <div
            className="org-main"
        >  
            <div className="org-flex">
                <span className="org-title">负责人:</span>
                <span className="org-content" >
                {this.props.name}
                </span>
            </div>    
            <div className="org-fle">
                <span className="org-title">社团部门:</span>
                <span className="org-content " >
                {this.props.admin.map(item=>(<Tag color="#55acee" className="org-tag" key={item}> {item}</Tag>) )}
                </span>
            </div>
            <div >
                <span className="org-title">社团简介:</span>
                <span className="org-content">
                <div style={{ marginTop: "4px"}}>
                <Input.TextArea className="text" autoSize={{ minRows: 5, maxRows: 5 }} value={this.props.desc} disabled={true}/>
              </div></span>
            </div>
        </div>
        <div style={{textAlign:'center'}}>
            <Link to={{pathname:'/peoplefrom',state:{department:this.props.department}}}>
                <Button type="primary">申请加入</Button>
            </Link>
            </div>
        </div>
        <Footer />
        </>
    )
  }

}

export default connect(
({org})=>({
    webname:org.webname,
    name: org.name,
    department:org.department,
    imgurl: org.imgurl,
    desc: org.desc,
    phone: org.phone,
    admin: org.admin,
}),
(dispath)=>({
    depart(data){  
      dispath({"type":"DEPART","key":data})
    }
})
)(Org);