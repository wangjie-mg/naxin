import React from 'react';
import { connect } from 'react-redux';

import './Application.css';
import { Image } from "antd";
import { Flex } from 'antd-mobile';
import Title from "../Title/Title";
import { Link } from 'react-router-dom';

// import { FileSearchOutlined } from '@ant-design/icons';

// const { Header } = Layout;
class Application extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
 


  
  render(){

    return(
        <>
            <div style={{padding:"0 3vw"}}>
            <Title name={this.props.name} color="rgb(102,193,255)"/>

            <Flex wrap="wrap"  style={{marginLeft:"3vw"}}>
                {this.props.appdata.map((item,index)=>{
                    return(
                      <Link to={item.to}>
                      <div key={index} className="applist">
                      <Image width={40} src={item.url} preview="false" />
                        <p>{item.name}</p>
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
   appdata:main.appdata
})
)(Application);
