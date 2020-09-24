import React from "react";
import "./review.css";
import { message, List, Avatar } from "antd";
import cookie from "react-cookies";
import getRequest from "../../_util/request";
import { connect } from "react-redux";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

class Review extends React.Component {
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
      url: "/api/findog",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        department: "all",
        userid: cookie.load("userid"),
      },
    };
    getRequest(url, this.data.bind(this));
  }

  data = (req) => {
    const { code } = req.data;
    if (code === true) {
      this.props.upli(req.data.organiza);
    } else {
      message.error("网络错误", 2);
    }
  };
  ong = (a) => {
    const url = {
      method: "post",
      url: "/api/updateog",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        department: a,
        userid: cookie.load("userid"),
      },
    };
    getRequest(url, this.rtdata.bind(this, a));
  };

  tong = (a) => {
    const url = {
      method: "post",
      url: "/api/removeog",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        department: a,
        userid: cookie.load("userid"),
      },
    };
    getRequest(url, this.rtdata.bind(this, a));
  };

  rtdata = (name, req) => {
    
    const { code } = req.data;
    if (code === true) {
      const newlist = this.props.list.filter((item, index, array) => {
        return array[index].department !== name;
      });
      this.props.upli(newlist);
    } else {
      message.error("网络错误", 3);
    }
  };

  render() {
    return (
      <>
        <Header name={this.props.webname} isreview={false} />
        <div style={{ minHeight: 568 }}>
          <List
            className="demo-list"
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a href="/#" onClick={this.ong.bind(this, item.department)}>
                    确认通过
                  </a>,
                  <a
                    href="/#"
                    onClick={this.tong.bind(this, item.department)}
                    style={{ color: "rgb(255, 77, 79)" }}
                  >
                    驳回
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.imgurl} />}
                  title={<span>{item.department}</span>}
                  description={item.name}
                />
              </List.Item>
            )}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(
  ({ review }) => ({
    webname: review.webname,
    list: review.list,
  }),
  (dispath) => ({
    upli(data) {
      dispath({ type: "UPLI", key: data });
    },
  })
)(Review);
