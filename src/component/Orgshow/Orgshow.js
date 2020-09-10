import React from 'react';
import { connect } from 'react-redux';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './Orgshow.css';
import { Card, Avatar,Skeleton } from "antd";
// import { Flex } from 'antd-mobile'
import Title from "../Title/Title";

// import { FileSearchOutlined } from '@ant-design/icons';

// const { Header } = Layout;
const { Meta } = Card;
class Orgshow extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
 


  
  render(){

    return(
        <>
            <div style={{padding:"0 3vw"}}>
            <Title name={this.props.name} color="rgb(252,107,121)"/>
            <Card
          style={{ width: "300px", margin: "16px auto" }}
          actions={[
            <span>查看报名</span>,
            <span>编辑资料</span>,
            this.props.isadmin?<span>添加管理</span>:<EllipsisOutlined key="ellipsis" />,
          ]}
        >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="西邮创行创业着啊协会"
              description="This is the description"
            />
            
        </Card>
            </div>
        </>
    )
  }

}

export default connect(
({main})=>({
   appdata:main.appdata
})
)(Orgshow);
