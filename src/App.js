import './App.css';
import { Col, Row } from 'antd';
import MainMenu from './components/header/MainMenu';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux'
import { MENU_LABEL } from './Constants';

const App = ({current}) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={2}>
            <span className="logo" />
          </Col>
          <Col span={22}>
            <MainMenu/>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{MENU_LABEL[current]}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.menu
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect
