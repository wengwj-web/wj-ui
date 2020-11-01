import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入所有图标
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)

const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x" />
        <Menu defaultIndex={'0'} mode={'horizontal'} defaultOpenSubMenus={['2']} onSelect={(index) => { console.log(index) }}>
          <MenuItem >cool link</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
          {/* <li>123</li> */}
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
          <Button btnType="primary" size="lg">bg button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
