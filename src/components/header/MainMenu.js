import { Menu } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { menuClicked } from '../../actions/actions';
import { MENU_LABEL } from '../../Constants';

const MainMenu = ({current, dispatch}) => (
  <Menu onClick={({key}) => dispatch(menuClicked(key))} selectedKeys={[current]} mode="horizontal">
    <Menu.Item key="home" icon={<HomeOutlined />}>
      {MENU_LABEL.home}
    </Menu.Item>
    <Menu.Item key="about" icon={<UserOutlined />}>
      {MENU_LABEL.about}
    </Menu.Item>
  </Menu>
)

const mapStateToProps = (state) => {
  return {
    current: state.menu
  }
}

const MainMenuWithConnect = connect(mapStateToProps)(MainMenu)
export default MainMenuWithConnect

