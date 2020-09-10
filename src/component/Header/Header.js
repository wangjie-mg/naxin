import React from 'react';
import { connect } from 'react-redux';

import './Header.css';
import { Layout,Image } from "antd";
import imgurl from "./shetuan.png"
import { FileSearchOutlined } from '@ant-design/icons';

const { Header } = Layout;


class Headera extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
 


  
  render(){

    return(
        <>
            <Header className="head">
              <div className="head-img">
                <Image
                  width={50}
                  src={imgurl}
                  preview={false}
                />
                <span></span>
                <span>{this.props.name}</span> 
              </div>
              
              {this.props.isreview?<div className="sh"><FileSearchOutlined style={{fontSize: '25px' }} /></div>:''}
              
            </Header>
        </>
    )
  }

}

export default connect(
({main})=>({
   a:main.a
})
)(Headera);
