import React from 'react';
import './admin.css';
import { message,Form, Input,  Button, Space  } from "antd";
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import getRequest from "../../_util/request";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    if(!cookie.load('userid') || !cookie.load('token')){
      this.props.history.push('/')
    }
  }
  onFinish = values => {
    
    const requrl = {
        method: "post",
        url:"/api/saveadmin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          list:values.user,
          department:this.props.location.state.department
        },
      };
      getRequest(requrl, this.savepeo.bind(this));
  };
  savepeo = (req)=>{
    const {code} = req.data;
    if(code === true){
      this.props.history.push('/')
      message.success("添加成功",2)
    }else{
      message.error('网络错误,请重新添加',2)
    }
  }
  render(){
      return(
        <>
         <Header name={this.props.webname} isreview={false} />
          <div style={{minHeight:568}}>

         <Form style={{padding:"4vw"}} name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off">
      <Form.List name="user">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex' }} align="start">
                  <Form.Item
                    {...field}
                    name={[field.name, 'userid']}
                    fieldKey={[field.fieldKey, 'first']}
                    rules={[{ required: true, message: '请填写学号' }]}
                  >
                    <Input placeholder="添加学号" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'name']}
                    fieldKey={[field.fieldKey, 'last']}
                    rules={[{ required: true, message: '请填写姓名' }]}
                  >
                    <Input placeholder="添加姓名" />
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined /> 添加社团管理
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item  style={{textAlign:"center"}}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>

      
    </div>
         <Footer />
        </>
    )
  }

}

export default connect(
({admin})=>({
    webname:admin.webname,
  
}),
(dispath)=>({
    
})

)(Admin);
