import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import './App.less';

const { Header, Content, Footer } = Layout;

function App() {
  const menuItems = [
    {
      key: '/',
      label: <Link to='/'>首页</Link>,
    },
    {
      key: '/products',
      label: <Link to='/products'>产品</Link>,
    },
    {
      key: '/about',
      label: <Link to='/about'>关于</Link>,
    },
  ];

  return (
    <BrowserRouter>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <div className='logo'>Vite Demo</div>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['/']}
            items={menuItems}
            className='app-menu'
          />
        </Header>
        <Content className='app-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Content>
        <Footer className='app-footer'>
          Vite Demo ©2024 Created with React + Ant Design
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
