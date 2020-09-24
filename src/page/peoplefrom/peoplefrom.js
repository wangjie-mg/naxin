import React from 'react';
import './peoplefrom.css';
import { message,Form, Input,  Button,Tag  } from "antd";
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import { connect } from 'react-redux';
import getRequest from "../../_util/request"
import cookie from "react-cookies";

const { CheckableTag } = Tag;

class Peolefrom extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  formRef = React.createRef();

  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  componentDidMount(){
    if(!cookie.load('userid') || !cookie.load('token')){
      this.props.history.push('/')
  }
    const url = {
        method: "post",
        url: "/api/wxuser",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
          token: cookie.load('token'),
          userid:cookie.load('userid')
        }
      };
      const ogurl = {
        method: "post",
        url: "/api/findog",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data:{
          department: this.props.location.state.department,
        }
      };
      
      getRequest(ogurl, this.ogdata.bind(this));
      getRequest(url, this.data.bind(this));
  }
  ogdata=(req)=>{
    const {code} =req.data;
      if(code === true){
        console.log(req.data.organiza[0])
        this.props.og(req.data.organiza[0])
      }else{
        message.error("网络错误",2);
      }
  }
  data = (req) => {
      const {code} =req.data;
      if(code === true){
        this.formRef.current.setFieldsValue({
          name:req.data.name,
          userid:cookie.load('userid'),
          phone:req.data.mobile
        });
        this.props.user(req.data)
      }else{
        message.error("网络错误",2);
      }
  }
  onFinish = values => {
        const newdata={
          ...values,
          department:this.props.department,
          section:this.props.selectedTags,
        }
        
        const requrl = {
          method: "post",
          url:"/api/saveperson",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: newdata,
        };
        getRequest(requrl, this.savepeo.bind(this));
  };
  savepeo=(req)=>{
    const {code}=req.data;
    
    if(code === true){
      this.props.history.push('/')
      message.success('报名成功',4)
    }else{
      message.error('网络错误',4);
    }
  }
  handleChange(tag, checked) {
    const { selectedTags } = this.props;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    this.props.select(nextSelectedTags);
}
  render(){
      const { selectedTags } = this.props;
      
      return(
        <>
         <Header name={this.props.webname} isreview={false} />
         <Form style={{padding:"6vw"}} {...this.layout} ref={this.formRef} name="nest-messages" onFinish={this.onFinish} >
         <Form.Item
           name={'name'}
           label="姓名"
           style={{marginBottom:"10px"}}

           rules={[
             {
               
               required: true,
               message: '姓名需要填写!'
             
              },
           ]}
         >
         <Input  disabled={this.props.name? true:false} />
         </Form.Item>
         <Form.Item
           name={'userid'}
           label="学号"
           style={{marginBottom:"10px"}}

           rules={[
             {
               required: true,
               message: '学号需要填写!'

             },
           ]}
         >
         <Input disabled={cookie.load("userid")?true:false} />
         </Form.Item>
         <Form.Item
         name={'class'}
         label="班级"
         style={{marginBottom:"10px"}}

         rules={[
           {
             required: true,
             message: '班级需要填写!'
           },
         ]}
       >
       <Input defaultValue={this.props.class} disabled={this.props.class? true:false} />
       </Form.Item>
       
       <Form.Item
           name={'phone'}
           label="电话"
           style={{marginBottom:"10px"}}

           rules={[
             {
               required: true,
               message: '电话需要填写!'
             },
           ]}
         >
           <Input disabled={this.props.phone? true:false}/>
        </Form.Item>
         <Form.Item
           name={'admin'}
           label="心仪的部门"
           style={{marginBottom:"10px"}}
         >
         
        {this.props.tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
         </Form.Item>
         <Form.Item name={'desc'} label="个人简介"
         rules={[
            {
              required: true,
              message: '简介需要填写!'
            },
          ]}>
           <Input.TextArea autoSize={{ minRows: 4, maxRows: 4 }}/>
         </Form.Item>
         <Form.Item style={{textAlign:"center"}}>
           <Button type="primary" htmlType="submit">
             提交
           </Button>
         </Form.Item>
       </Form>
         <Footer />
        </>
    )
  }

}

export default connect(
({peoplefrom})=>({
    webname:peoplefrom.webname,
    selectedTags:peoplefrom.selectedTags,
    tagsData:peoplefrom.tagsData,
    name:peoplefrom.name,
    class:peoplefrom.class,
    phone:peoplefrom.phone,
    desc:peoplefrom.desc,
    department:peoplefrom.department,
}),
(dispath)=>({
    user(data){  
      dispath({"type":"USER","key":data})
    },
    
    select(data){
      dispath({"type":"SELECTEDTAGS","key":data})
    },
    og(data){
      dispath({"type":"OG","key":data})
    }
    
})

)(Peolefrom);
