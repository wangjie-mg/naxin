import React from "react";
import "./content.css";
import { message, Form, Input, Button } from "antd";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import getRequest from "../../_util/request";
import cookie from "react-cookies";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  formRef = React.createRef();
  
  componentDidMount(){
    if(!cookie.load('userid') || !cookie.load('token')){
      this.props.history.push('/')
    }
    const url = {
      method: "post",
      url: "/api/findog",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        token: cookie.load('token'),
        department: this.props.location.state.department,
      },
    };
    getRequest(url, this.data.bind(this));
  }
  data=(req)=>{
    if(req.data.code === true){
      this.formRef.current.setFieldsValue({desc:req.data.organiza[0].desc})
      
    }else{
      message.error('网络错误',2);
    }
  }

  onFinish = (values) => {
    const requrl = {
      method: "post",
      url:"/api/updatedosc",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        desc:values.desc,
        department:this.props.location.state.department,
      },
    };
    getRequest(requrl, this.savepeo.bind(this));
  };
  savepeo=(req)=>{
    if(req.data.code===true){
      this.props.history.push('/')
      message.success('修改成功',2)
    }else{
      message.error("网络错误",2)
    }
  }

  render() {
    return (
      <>
        <Header name="编辑资料" isreview={false} />
        <div style={{minHeight:568}}>
        
        <Form name="dynamic_form_nest_item" className="desc-from" onFinish={this.onFinish} ref={this.formRef}>
          <Form.Item name={"desc"} label="简介">
            <Input.TextArea autoSize={{ minRows: 6, maxRows: 6 }}/>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Content;
