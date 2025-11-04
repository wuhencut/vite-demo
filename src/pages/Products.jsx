import { Card, Row, Col, Tag, Button, Space } from 'antd';
import { ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import './Products.less';

const products = [
  {
    id: 1,
    name: '产品 A',
    description: '这是一个优秀的产品，具有强大的功能和良好的性能',
    price: '¥299',
    tags: ['热门', '推荐'],
    rating: 4.8,
  },
  {
    id: 2,
    name: '产品 B',
    description: '专为专业用户设计，提供高级功能和定制选项',
    price: '¥599',
    tags: ['专业', '高级'],
    rating: 4.9,
  },
  {
    id: 3,
    name: '产品 C',
    description: '性价比之选，适合个人用户和小型团队使用',
    price: '¥199',
    tags: ['入门', '经济'],
    rating: 4.6,
  },
  {
    id: 4,
    name: '产品 D',
    description: '企业级解决方案，提供完善的技术支持和售后服务',
    price: '¥1299',
    tags: ['企业', '专业'],
    rating: 5.0,
  },
];

function Products() {
  return (
    <div className='products-page'>
      <h1>产品列表</h1>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.id}>
            <Card
              hoverable
              className='product-card'
              cover={
                <div className='product-image'>
                  <div className='product-placeholder'>{product.name}</div>
                </div>
              }
              actions={[
                <Button type='primary' icon={<ShoppingCartOutlined />} block>
                  加入购物车
                </Button>,
              ]}
            >
              <Card.Meta
                title={
                  <Space>
                    {product.name}
                    <Tag color='gold'>
                      <StarOutlined /> {product.rating}
                    </Tag>
                  </Space>
                }
                description={
                  <div>
                    <p>{product.description}</p>
                    <div className='product-tags'>
                      {product.tags.map((tag) => (
                        <Tag key={tag} color='blue'>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <div className='product-price'>{product.price}</div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
