import React from 'react';
import './orgfrom.css';
import { message,Form, Input,  Button, Upload, Tag,Tooltip } from "antd";
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import getRequest from "../../_util/request"

import {  InboxOutlined,PlusOutlined } from '@ant-design/icons';
import cookie from "react-cookies";
import ImgCrop from 'antd-img-crop';
import { connect } from 'react-redux';
const { Dragger } = Upload;

class Orgfrom extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  formRef = React.createRef();
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
          userid:cookie.load('userid'),
          token: cookie.load('token'),
        }
      };
      getRequest(url, this.data.bind(this));
  }
  data = (req) => {
      const {code} =req.data;
      if(code === true){
        this.props.user(req.data)
        this.formRef.current.setFieldsValue({name:req.data.name,phone:req.data.mobile});
      }else{
        message.error("网络错误",2);
      }
  }
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  onFinish = values => {
    
    if(this.props.fileList.length === 0){
      message.error("没上传图片",3);
      return ;
    }
        const newdata={
          ...values,
          imgurl:'/pic/images/'+this.props.fileList[0].response.imgurl,
          admin:this.props.tags,
          userid:cookie.load('userid'),
          token: cookie.load('token'),
          
        }
       
        const requrl = {
          method: "post",
          url:"/api/saveog",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: newdata,
        };
        getRequest(requrl, this.saveog.bind(this));
  };
  saveog = (req)=>{
    if(req.data.code ===true){
      this.props.history.push('/')
      message.success('申请成功，请等待审核!',2);
    }else{
      message.error('网络错误',2)
    }
  }
  onChange(info) {
    const { status } = info.file;
    let fileList = [...info.fileList];
    fileList = [...info.fileList].slice(-1);
    if (status === "done") {
      const { code, imgurl } = info.file.response;
      if (code) {
        message.success(`${info.file.name} 文件上传成功.`);
        this.props.file(fileList);
        this.props.img(imgurl)

      } else {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败.`);
    }
    this.props.file(fileList)
  }
  config = {
    name: "file",
    action: "/api/info",
    onChange: this.onChange.bind(this),
  };
  
  handleClose = removedTag => {
    const tags = this.props.tags.filter(tag => tag !== removedTag);
    this.props.tag(tags);

  };

  showInput = () => {
    this.props.inputvb(true);
  };

  handleInputChange = e => {
    this.props.inputva(e.target.value);
  };

  handleInputConfirm = () => {
    const { inputValue } = this.props;
    let { tags } = this.props;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.props.tag(tags);
    this.props.inputva('');
    this.props.inputvb(false);
  };

  handleEditInputChange = e => {
    this.props.editv(e.target.value)
  };

  handleEditInputConfirm = () => {
      const newTags = [...this.props.tags];
      newTags[this.props.editInputIndex] = this.props.editInputValue;
      this.props.tag(newTags);
      this.props.editi(-1);
      this.props.editv("");
  };
  render(){
      const { tags, inputVisible, inputValue, editInputIndex, editInputValue } = this.props;
      
      return(
        <>
         <Header name={this.props.webname} isreview={false} />
         
         <Form style={{padding:"6vw"}} {...this.layout} ref={this.formRef} name="nest-messages" onFinish={this.onFinish} >
         <Form.Item
           name={'department'}
           label="社团名称"
           style={{marginBottom:"10px"}}
           rules={[
             {
               required: true,
               message: '社团名称必须填写!'
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item
           name={'ad'}
           label="二级部门"
           style={{marginBottom:"10px"}}
         >
         {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={input => {
                  this.editInput = input;
                }}
                key={tag}
                size="small"
                className="tag-input"
                value={editInputValue}
                onChange={this.handleEditInputChange}
                onBlur={this.handleEditInputConfirm}
                onPressEnter={this.handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              className="edit-tag"
              key={tag}
              closable="true"
              onClose={() => this.handleClose(tag)}
            >
              <span
                onDoubleClick={e => {
                  if (index !== 0) {
                      this.props.editi(index);
                      this.props.editInputValue(tag)
                      this.editInput.focus();
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={(input) => {
              this.fouinput = input;
            }}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag className="site-tag-plus" onClick={this.showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
        </Form.Item>

         <Form.Item
           name={'name'}
           label="申请人"
           style={{marginBottom:"10px"}}
           rules={[
             {
               required: true,
               message: '申请人必须填写!'
           
              },
           ]}
         >
         
           <Input defaultValue={this.props.name} value={this.props.name} disabled={this.props.name? true:false} />
         </Form.Item>

         <Form.Item
           name={'phone'}
           label="电话"
           style={{marginBottom:"10px"}}
           rules={[
             {
               required: true ,
               message: '电话必须填写!'
              },
           ]}
         >
         <Input defaultValue={this.props.phone} disabled={this.props.phone? true:false} />
         </Form.Item>

         
         <Form.Item 
          style={{marginBottom:"10px"}}
          name={'desc'} 
          label="社团简介"
          rules={[
            {
              required: true,
              message: '社团简介必须填写!'
            },
          ]}
         >
           <Input.TextArea  autoSize={{ minRows: 5, maxRows: 5 }}
           />
         </Form.Item>
         <Form.Item
         style={{marginBottom:"10px"}}
         label="社团logo"
         >
         <ImgCrop rotate>
              <Dragger {...this.config} fileList={this.props.fileList}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击 或 拖拽上传文件</p>
                <p className="ant-upload-hint">
                  上传的图片文件请注意大小
                </p>
              </Dragger>
          </ImgCrop>
        </Form.Item>

         <Form.Item style={{textAlign:"center",marginBottom:"10px"}}>
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
({orgfrom})=>({
  webname:orgfrom.webname,
  name:orgfrom.name,
  phone:orgfrom.phone,
  fileList:orgfrom.fileList,
  tags: orgfrom.tags,
  inputVisible: orgfrom.inputVisible,
  inputValue: orgfrom.inputValue,
  editInputIndex: orgfrom.editInputIndex,
  editInputValue: orgfrom.editInputValue,
}),
(dispath)=>({
    file(data){  
      dispath({"type":"FILE","key":data})
    },
    img(data){
      dispath({"type":"IMGURL","key":data})
    },
    tag(data){
      dispath({"type":"TAGS","key":data})
    },
    editi(data){
      dispath({"type":"EDITI","key":data});
    },
    editv(data){
      dispath({"type":"EDITV","key":data})
    },
    inputvb(data){
      dispath({"type":"INPUTVB","key":data})
    },
    inputva(data){
      dispath({"type":"INPUTVA","key":data})
    },
    user(data){
      dispath({"type":"USER","key":data})
    }
})

)(Orgfrom);
