import React from 'react';
import { connect } from 'react-redux';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './Label.css';
import { Card, Avatar,Skeleton } from "antd";

import Title from "../Title/Title";


const { Meta } = Card;
class Label extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
 


  
  render(){

    return(
        <>
            
        </>
    )
  }

}

export default connect(
({main})=>({
   appdata:main.appdata
})
)(Label);
