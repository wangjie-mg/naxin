import React from 'react';
import { connect } from 'react-redux';
import {  EllipsisOutlined,ClockCircleOutlined } from '@ant-design/icons';
import './Orgshow.css';
import {Link} from "react-router-dom";
import { Card, Avatar,Tag } from "antd";
import Title from "../Title/Title";

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
        <Title name={this.props.name} color="rgb(252,107,121)" />
        {

          this.props.orgdata.length?  
        <Card
            className="card-back"
            actions={[
              this.props.isload?<Link to={{pathname:'/enter',state:{department:this.props.orgdata[0].department}}}><span>查看报名</span></Link>:<EllipsisOutlined key="ellipsis" />,   
              this.props.isload?<Link to={{pathname:'/content',state:{department:this.props.orgdata[0].department}}}><span>编辑资料</span></Link>:<EllipsisOutlined key="ellipsis" />,
              this.props.isadmin&&this.props.isload?<Link to={{pathname:'/admin',state:{department:this.props.orgdata[0].department}}}><span>添加管理</span></Link>:<EllipsisOutlined key="ellipsis" />,
            ]}
          >
          <div className="showm">
        
          <Meta
            avatar={
              <Avatar src={this.props.orgdata[0].imgurl} />
            }
            title={this.props.orgdata[0].department}
            description={this.props.orgdata[0].name}
          />{!this.props.isload? <Tag className="tags"  icon={<ClockCircleOutlined />} color="warning">
        审核中请等待
      </Tag>:''}</div>
          </Card>
          :""
        }
        </div>
      </>
    )
  }

}

export default connect(
({main})=>({
  isload:main.isload,
  isadmin:main.isadmin,
  orgdata:main.orgdata,
  department:main.department,
})
)(Orgshow);
