## 🚧 usege

```bash
# 克隆项目
git clone xxx;

# 进入项目目录
cd xx

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:8888

## 🌈 about

项目采用 vite 脚手架生成 vue3 项目模板;开发支持 vue3 + ts

> 新增 eslint + prettier + commitlint + husky 代码校验及代码提交校验

### 项目目录

```base
- vite.config.js
- tsconfig.js
- .eslintrc.cjs
- xxx
- src
    - main.ts
    - appvue
    - view
    - utils
    - layout
    - components
    - style
```

## 🏭 环境支持

| Edge      | Firefox      | Chrome      | Safari      |
| --------- | ------------ | ----------- | ----------- |
| Edge ≥ 88 | Firefox ≥ 78 | Chrome ≥ 87 | Safari ≥ 13 |

> 由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。

## ⚡ 使用说明

建议使用 cnpm，因为 yarn 有时会报错。<a href="http://nodejs.cn/" target="_blank">node 版本 > 14.18+/16+</a>

> Vite 不再支持 Node 12 / 13 / 15，因为上述版本已经进入了 EOL 阶段。现在你必须使用 Node 14.18+ / 16+ 版本。

## 📚 积累

未来根据这个版本抽离出一基础模板
