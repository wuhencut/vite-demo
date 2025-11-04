# Vite Demo - React + Ant Design SPA

这是一个使用现代前端技术栈构建的单页应用（SPA）示例项目。

## 技术栈

- **Vite** - 下一代前端构建工具
- **React** - 用于构建用户界面的 JavaScript 库
- **React Router** - React 的声明式路由
- **Ant Design** - 企业级 UI 设计语言和组件库（最新版本）
- **Less** - CSS 预处理器

## 功能特性

- ✅ 使用 Vite 构建，提供极速的开发体验
- ✅ React 18 + Hooks
- ✅ React Router 实现单页应用路由
- ✅ Ant Design 5 最新版本
- ✅ Less 样式预处理器
- ✅ 响应式设计

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
vite-demo/
├── src/
│   ├── pages/          # 页面组件
│   │   ├── Home.jsx    # 首页
│   │   ├── Products.jsx # 产品页
│   │   └── About.jsx   # 关于页
│   ├── App.jsx         # 主应用组件
│   ├── App.less        # 应用样式
│   ├── main.jsx        # 入口文件
│   └── index.less      # 全局样式
├── index.html          # HTML 模板
├── vite.config.js      # Vite 配置
└── package.json        # 项目配置
```

## 页面说明

- **首页** (`/`) - 展示项目介绍和特性
- **产品页** (`/products`) - 展示产品列表
- **关于页** (`/about`) - 项目介绍和技术栈说明

## 开发说明

项目已经配置好了所有必要的工具和依赖，可以直接开始开发。

- 样式文件使用 Less 编写
- Ant Design 已配置中文语言包
- React Router 已配置路由
- 所有页面都支持响应式设计

## License

MIT
