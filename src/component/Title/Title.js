import React from 'react';
import './Title.css';
// import { Avatar } from "./node_modules/antd";
// import { Flex  } from 'antd-mobile';
// import cookie from "react-cookies";

// import getRequest from "../../_util/request";

// import { connect } from './node_modules/react-redux';
// import { Flex } from './node_modules/antd-mobile';


class Tiltle extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){

    return(
        <>
        <div className="list-title"><span className="list-title-span" style={{background:this.props.color}}></span>{this.props.name}</div>
        </>
    )
  }

}

export default Tiltle;
