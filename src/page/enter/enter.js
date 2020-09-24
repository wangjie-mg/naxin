import React from "react";
import "./enter.css";
import { message, List, Affix} from "antd";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import cookie from "react-cookies";
import getRequest from "../../_util/request";
import { connect } from "react-redux";



class Enter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (!cookie.load("userid") || !cookie.load("token")) {
      this.props.history.push("/");
    }
    const url = {
      method: "post",
      url: "/api/findperson",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        department: this.props.location.state.department,
      },
    };
    getRequest(url, this.data.bind(this));
  }

  data = (req) => {
    const { code } = req.data;
    if (code === true) {
      
      this.props.user(req.data.person);
    } else {
      message.error("网络错误", 2);
    }
  };
  
  render() {
    console.log(this.props.alist)
    return (
      <>
        <Header name={this.props.webname} isreview={false} />
        <div style={{ minHeight: 568 }}>
          {this.props.alist instanceof Array  ? <List
            className="demo-loadmore-list en-from"
            itemLayout="horizontal"
            dataSource={this.props.alist}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<p>{item.name}</p>}
                  description={item.class}
                />
              </List.Item>
            )}
          /> : ''}
          <Affix offsetBottom={25}>
          <div style={{ textAlign: "center" }}>
          <a
            className="dload-a"
            download="社团纳新名单"
            href={
              "http://naxin.xupt.org/api/load?department=" +
              this.props.location.state.department
            }
          >
            点击下载报名信息
          </a>
        </div>
          </Affix>
        </div>
        <Footer />
      </>
    );
  }
}




export default connect(
  ({ enter }) => ({
    webname: enter.webname,
    alist: enter.alist,
  }),
  (dispath) => ({
    user(data) {
      dispath({ type: "USER", key: data });
    },
  })
)(Enter);