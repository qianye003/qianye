import React, { Component } from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import routerType from "../../route/router-type";

const routerItems = routerType.map((item,index)=>(
<Menu.Item key = {index}><Link to={"/"+item}>{item}</Link></Menu.Item>
))
class Nav extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                {routerItems}
            </Menu>
        );
    }
}

export default Nav;
