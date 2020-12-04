import React, { Component } from 'react';
import {Menu} from "antd";
import {Link ,withRouter} from "react-router-dom";
import routerType from "../../route/router-type";

const routerItems = routerType.map((item)=>(
<Menu.Item key = {"/" + (item === "home" ? "" : item)}><Link to={"/" + (item === "home" ? "" : item)}>{item}</Link></Menu.Item>
))
class Nav extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" selectedKeys={[this.props.history.location.pathname]} defaultSelectedKeys={["/home"]}>
                {routerItems}
            </Menu>
        );
    }
}

export default withRouter(Nav);
