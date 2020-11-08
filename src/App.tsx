// import React, { useState, useEffect } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// // 引入所有图标
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import Button from './components/Button/button'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
// import Icon from './components/Icon/icon'
// import Transition from './components/Transition/transition'
// import axios from 'axios'
// library.add(fas)

// const App: React.FC = () => {
//   const [show, setShow] = useState(false)
//   const [title, setTitle] = useState('')
//   const postData = {
//     title: 'my title',
//     body: 'hello man'
//   }
//   useEffect(() => {
//     axios.post('https://jsonplaceholder.typicode.com/posts', postData)
//       .then(resp => {
//         console.log(resp)
//         setTitle(resp.data.title)
//       })
//   })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{title}</h1>
//         <Icon icon="coffee" theme="primary" size="10x" />
//         <Menu defaultIndex={'0'} mode={'horizontal'} defaultOpenSubMenus={['2']} onSelect={(index) => { console.log(index) }}>
//           <MenuItem >cool link</MenuItem>
//           <MenuItem disabled>cool link2</MenuItem>
//           <SubMenu title="dropdown">
//             <MenuItem>dropdown1</MenuItem>
//             <MenuItem>dropdown2</MenuItem>
//           </SubMenu>
//           <MenuItem>cool link3</MenuItem>
//           {/* <li>123</li> */}
//         </Menu>
//         <Button size="lg" onClick={() => { setShow(!show) }}>Toggle</Button>
//         <Transition in={show} timeout={300} animation="zoom-in-left">
//           <div>
//             <p>123</p>
//             <p>123</p>
//             <p>123</p>
//             <p>123</p>
//             <p>123</p>
//           </div>
//         </Transition>
//         <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
//           <Button btnType="primary" size="lg">bg button</Button>
//         </Transition>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import axios from 'axios'
const App: React.FC = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
  return (
    <div className="app" style={{ margin: 100 }}>
      <input type="file" name="myFile" onChange={handleFileChange} />
    </div>
  )
}

export default App
