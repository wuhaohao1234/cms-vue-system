# cms-vue-system
cms后台管理系统

## 项目配置

### 初始化

1. `npm init -y`

2. npm换源

    ```
    //.npmrc
    registry=http://registry.npm.taobao.org
    ```

3. 开发环境安装webpack, webpack-cli依赖

    `npm install webpack webpack-cli -D`

4. 添加测试文件

    ```
    //src/main.js
    console.log(1)
    ```

5. 修改package.json配置文件

    ```
    "scripts": {
        "build": "npx webpack ./src/main.js --mode development"
    },
    ```

6. 编译

    `npm run build`

