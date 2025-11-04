import { Card, Timeline, Typography, Space, Divider } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  CodeOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import './About.less';

const { Title, Paragraph } = Typography;

function About() {
  const techStack = [
    { name: 'Vite', description: '下一代前端构建工具' },
    { name: 'React', description: '用于构建用户界面的 JavaScript 库' },
    { name: 'React Router', description: 'React 的声明式路由' },
    { name: 'Ant Design', description: '企业级 UI 设计语言和组件库' },
    { name: 'Less', description: 'CSS 预处理器' },
  ];

  return (
    <div className='about-page'>
      <Title level={1}>关于本项目</Title>
      <Paragraph className='about-description'>
        这是一个使用现代前端技术栈构建的单页应用（SPA）示例项目。 展示了如何使用
        Vite、React、Less、Ant Design 和 React Router
        来快速构建一个功能完整的前端应用。
      </Paragraph>

      <Divider>技术栈</Divider>

      <Row gutter={[16, 16]}>
        {techStack.map((tech, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className='tech-card'>
              <Space
                direction='vertical'
                size='small'
                style={{ width: '100%' }}
              >
                <Title level={4}>
                  <CodeOutlined /> {tech.name}
                </Title>
                <Paragraph>{tech.description}</Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider>项目特性</Divider>

      <Timeline
        items={[
          {
            color: 'green',
            dot: <CheckCircleOutlined />,
            children: (
              <div>
                <Title level={5}>快速开发</Title>
                <Paragraph>使用 Vite 提供极速的开发体验和热更新</Paragraph>
              </div>
            ),
          },
          {
            color: 'blue',
            dot: <RocketOutlined />,
            children: (
              <div>
                <Title level={5}>现代框架</Title>
                <Paragraph>基于 React 18 构建，使用最新的 Hooks API</Paragraph>
              </div>
            ),
          },
          {
            color: 'purple',
            dot: <BulbOutlined />,
            children: (
              <div>
                <Title level={5}>UI 组件</Title>
                <Paragraph>集成 Ant Design 5，提供丰富的企业级组件</Paragraph>
              </div>
            ),
          },
          {
            color: 'orange',
            dot: <CodeOutlined />,
            children: (
              <div>
                <Title level={5}>路由管理</Title>
                <Paragraph>使用 React Router 实现单页应用路由</Paragraph>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default About;
