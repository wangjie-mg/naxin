import React from 'react';
import './Footer.css';
import { Layout } from "antd";

import { connect } from 'react-redux';
const { Footer} = Layout;



class Orglist extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
 

 
  
  render(){

    
    return(
        <>
        <Footer style={{marginTop:"3vw", borderTop: "1px solid #ccc", textAlign: "center",background:'rgb(25,42,59)' }}>
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
