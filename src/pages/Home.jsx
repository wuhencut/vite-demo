import { Card, Row, Col, Button, Space, Typography } from 'antd';
import {
  RocketOutlined,
  ThunderboltOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Home.less';

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-page'>
      <div className='hero-section'>
        <Title level={1}>欢迎使用 Vite + React Demo</Title>
        <Paragraph className='hero-description'>
          这是一个使用 Vite、React、Less、Ant Design 和 React Router
          构建的单页应用示例
        </Paragraph>
        <Space size='large'>
          <Button
            type='primary'
            size='large'
            icon={<RocketOutlined />}
            onClick={() => navigate('/products')}
          >
            查看产品
          </Button>
          <Button
            size='large'
            icon={<ThunderboltOutlined />}
            onClick={() => navigate('/about')}
          >
            了解更多
          </Button>
        </Space>
      </div>

      <Row gutter={[24, 24]} className='features-section'>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            cover={
              <div className='feature-icon'>
                <RocketOutlined />
              </div>
            }
          >
            <Card.Meta
              title='Vite 构建工具'
              description='极速的开发体验，快速的 HMR 热更新'
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            cover={
              <div className='feature-icon'>
                <ThunderboltOutlined />
              </div>
            }
          >
            <Card.Meta
              title='React 框架'
              description='现代化的 UI 库，组件化开发'
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            cover={
              <div className='feature-icon'>
                <FireOutlined />
              </div>
            }
          >
            <Card.Meta
              title='Ant Design'
              description='企业级 UI 设计语言和组件库'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
