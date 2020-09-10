import React from 'react';
import './orgfrom.css';
import { message,Form, Input, InputNumber, Button, Upload, } from "antd";
// import cookie from "react-cookies";
// import Orglist from "../../component/Orglist/Orglist"

// import Orgshow from "../../component/Orgshow/Orgshow"
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
// import Application from "../../component/Application/Application"
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
// import Title  from "../../component/Title/Title"1
// import getRequest from "../../_util/request";
// import headerurl from './shetuan.png'
import { connect } from 'react-redux';
const { Dragger } = Upload;

class Orgfrom extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  componentDidMount(){
    // let params = queryString.parse(this.props.location);
    // console.log(this.props.location)
    // const url = {
    //     method: "post",
    //     url: "/api/user",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     data: {
    //       // code: params.code,
    //     },
    //   };
    //   getRequest(url, this.data.bind(this));
  }

  data = (req) => {
      const {code} =req.data;
      if(code === true){
        
      }else{
        message.error("网络错误",2);
      }
  }
  
  onFinish = values => {
    console.log(values);
  };
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
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  handleEditInputChange = e => {
    this.setState({ editInputValue: e.target.value });
  };

  handleEditInputConfirm = () => {
    this.setState(({ tags, editInputIndex, editInputValue }) => {
      const newTags = [...tags];
      newTags[editInputIndex] = editInputValue;

      return {
        tags: newTags,
        editInputIndex: -1,
        editInputValue: '',
      };
    });
  };

  saveInputRef = input => {
    this.input = input;
  };

  saveEditInputRef = input => {
    this.editInput = input;
  };


  render(){
      console.log(this.props.name)
    return(
        <>
         <Header name={this.props.webname} isreview={this.props.isreview} />
         <Form style={{padding:"6vw"}} {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
         <Form.Item
           name={'department'}
           label="社团名称"
           rules={[
             {
               required: true,
               type:"社团名称"
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item
           name={'admin'}
           label="部门"
           rules={[
             {
               required: true,
               type: "部门",
             },
           ]}
         >
         {this.tags.map((tag, index) => {
            if (editInputIndex === index) {
              return (
                <Input
                  ref={this.saveEditInputRef}
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
                closable={index !== 0}
                onClose={() => this.handleClose(tag)}
              >
                <span
                  onDoubleClick={e => {
                    if (index !== 0) {
                      this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                        this.editInput.focus();
                      });
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
          {this.props.inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              className="tag-input"
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!this.props.inputVisible && (
            <Tag className="site-tag-plus" onClick={this.showInput}>
              <PlusOutlined /> New Tag
            </Tag>
          )}
         </Form.Item>
         <Form.Item
           name={'name'}
           label="申请人名称"
           
           rules={[
             {
               required: true,
               type: '申请人',
             },
           ]}
         >
           <Input defaultValue={this.props.name} disabled={this.props.name?"false":"true"} />
         </Form.Item>
         <Form.Item
           name={'phone'}
           label="电话"
           rules={[
             {
               required: true,
               type: '电话',
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item name={['user', 'website']} label="Website">
           <Input />
         </Form.Item>
         <Form.Item name={['user', 'introduction']} label="Introduction">
           <Input.TextArea />
         </Form.Item>
         <Form.Item label="Dragger">
              <Dragger {...this.config} fileList={this.props.fileList}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击 或 拖拽上传文件</p>
                <p className="ant-upload-hint">
                  一次仅支持上传一个图片文件，重复上传会覆盖上一个图片文件。支持
                  .jpg .png等常用图片格式
                </p>
              </Dragger>
        </Form.Item>

         <Form.Item style={{textAlign:"center"}}>
           <Button type="primary" htmlType="submit">
             Submit
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
    }
})

)(Orgfrom);
