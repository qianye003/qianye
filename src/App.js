import { Layout } from 'antd';
import {HashRouter} from "react-router-dom";
import Router from "./route/index"
import Nav from "./page/nav/Nav";
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
export default function App(){
  return(
    <Layout>
      <HashRouter>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Nav/>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Router/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </HashRouter>
    </Layout>
)}