import React from 'react';

import './Header.css';
import { Layout,Image,Menu, Dropdown } from "antd";
import imgurl from "./shetuan.png";

import { Link } from 'react-router-dom';
import Icon,{ UnorderedListOutlined  } from '@ant-design/icons';

const { Header } = Layout;
class Headera extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  // {this.props.isreview?
  //   <Menu.Item icon={<FileSearchOutlined />}>
  //     <Link to={{pathname:"/orgfrom/"}}>
  //       申请创建社团
  //     </Link>
  //   </Menu.Item>:''}

  // <Menu.Item icon={<FileSearchOutlined />}>
  //   <Link to={{pathname:"/review/",state:{department:this.props.department}}}>
  //     审核社团
  //   </Link>
  // </Menu.Item>:''}
  
  render(){
    const  aSvg = ()=>(<svg t="1600245280059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4680" width="200" height="200"><path d="M512.5 512m-447.8 0a447.8 447.8 0 1 0 895.6 0 447.8 447.8 0 1 0-895.6 0Z" fill="#FFD05B" p-id="4681"></path><path d="M745.5 309.8H312.4c-21.7 0-39.2 17.5-39.2 39.2v358.3c0 21.7 17.5 39.2 39.2 39.2h433.1c21.7 0 39.2-17.5 39.2-39.2V349c0-21.7-17.5-39.2-39.2-39.2z" fill="#FFFFFF" p-id="4682"></path><path d="M745.5 309.8H312.4c-21.7 0-39.2 17.5-39.2 39.2v74.2h511.5V349c0-21.7-17.5-39.2-39.2-39.2z" fill="#4CDBC4" p-id="4683"></path><path d="M718.2 366.5m-21 0a21 21 0 1 0 42 0 21 21 0 1 0-42 0Z" fill="#FFFFFF" p-id="4684"></path><path d="M652.5 366.5m-21 0a21 21 0 1 0 42 0 21 21 0 1 0-42 0Z" fill="#FFFFFF" p-id="4685"></path><path d="M586.7 366.5m-21 0a21 21 0 1 0 42 0 21 21 0 1 0-42 0Z" fill="#FFFFFF" p-id="4686"></path><path d="M315.9 463.7h426.8v18.2H315.9zM315.9 519h201.5v18.2H315.9zM315.9 573.6h201.5v18.2H315.9zM315.9 628.9h201.5v18.2H315.9zM315.9 684.2h201.5v18.2H315.9z" fill="#E6E9EE" p-id="4687"></path><path d="M553.1 519.7h185.4v182.6H553.1z" fill="#84DBFF" p-id="4688"></path></svg>)
    const bSvg = ()=>(<svg t="1600250004742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10860" width="200" height="200"><path d="M750.8 871.6H171.2c-1.7 0-3-1.3-3-3s1.3-3 3-3h579.5c1.7 0 3 1.3 3 3 0.1 1.6-1.3 3-2.9 3z" fill="#FFFFFF" p-id="10861"></path><path d="M750.8 884.1H171.2c-8.5 0-15.5-7-15.5-15.5s7-15.5 15.5-15.5h579.5c8.5 0 15.5 7 15.5 15.5s-6.9 15.5-15.4 15.5zM861.9 871.6h-57c-1.7 0-3-1.3-3-3s1.3-3 3-3h57c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3z" fill="#40220F" p-id="10862"></path><path d="M861.9 884.1h-57c-8.5 0-15.5-7-15.5-15.5s7-15.5 15.5-15.5h57c8.5 0 15.5 7 15.5 15.5s-7 15.5-15.5 15.5z" fill="#40220F" p-id="10863"></path><path d="M535 538.2m-325 0a325 325 0 1 0 650 0 325 325 0 1 0-650 0Z" fill="#FFF143" p-id="10864"></path><path d="M535 875.7c-90.1 0-174.9-35.1-238.6-98.9-63.7-63.7-98.9-148.5-98.9-238.6s35.1-174.9 98.9-238.6c63.7-63.7 148.5-98.9 238.6-98.9s174.9 35.1 238.6 98.9c63.7 63.7 98.9 148.5 98.9 238.6s-35.1 174.9-98.9 238.6-148.5 98.9-238.6 98.9z m0-650c-172.3 0-312.5 140.2-312.5 312.5S362.7 850.7 535 850.7s312.5-140.2 312.5-312.5S707.3 225.7 535 225.7z" fill="#40220F" p-id="10865"></path><path d="M535.2 229.2V848c170.9 0 309.4-138.5 309.4-309.4S706.1 229.2 535.2 229.2z" fill="#FAFFAD" p-id="10866"></path><path d="M718.4 546.4H351.6c-4.5 0-8.2-3.7-8.2-8.2 0-4.5 3.7-8.2 8.2-8.2h366.7c4.5 0 8.2 3.7 8.2 8.2 0.1 4.6-3.6 8.2-8.1 8.2z" fill="#40220F" p-id="10867"></path><path d="M718.4 556.4H351.6c-10 0-18.2-8.2-18.2-18.2s8.2-18.2 18.2-18.2h366.7c10 0 18.2 8.2 18.2 18.2s-8.1 18.2-18.1 18.2z" fill="#40220F" p-id="10868"></path><path d="M543.2 354.9v366.7c0 4.5-3.7 8.2-8.2 8.2-4.5 0-8.2-3.7-8.2-8.2V354.9c0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.6 8.2 8.2z" fill="#40220F" p-id="10869"></path><path d="M535 739.8c-10 0-18.2-8.2-18.2-18.2V354.9c0-10 8.2-18.2 18.2-18.2s18.2 8.2 18.2 18.2v366.7c0 10-8.2 18.2-18.2 18.2z" fill="#40220F" p-id="10870"></path></svg>)
    
    const HeartIcon = props => <Icon component={aSvg} {...props} />,
          TIcon= props => <Icon component={bSvg} {...props} />;
    
    
    const menu = (
      <Menu>
        
          <Menu.Item className="head-a" icon={<TIcon className="icon" />}>
            <Link to={{pathname:"/orgfrom/"}}>
              申请创建社团
            </Link>
          </Menu.Item>
        {this.props.isreview?
        <Menu.Item className="head-a" icon={<HeartIcon  className="icon"   />}>
          <Link  to={{pathname:"/review/",state:{department:this.props.department}}}>
            审核社团
          </Link>
        </Menu.Item>
        :''}
      </Menu>
    );
    return(
        <>
            <Header className="head">
            <Dropdown overlay={menu} trigger="click" placement="bottomRight">
              <UnorderedListOutlined className="head-tb" />
            </Dropdown>
              <div className="head-a head-img">
                <Image
                  width={40}
                  src={imgurl}
                  style={{marginRight: "16px" }}
                  preview={false}
                />
                
                <span>{this.props.name}</span> 
              </div>
              


              

              
              
            </Header>
        </>
    )
  }

}

export default Headera;
