<p align="center">
    <a href="https://daidai-oui.github.io/oui-weapp">
        <img width="200" src="./assets/logo.png">
    </a>
</p>

# Oui Weapp

### 一套高质量的微信小程序 UI 组件库

## 文档
[使用文档](https://daidai-oui.github.io/oui-weapp)
[小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/)

## 体验
使用微信扫一扫体验小程序组件示例

<img width="200" src="./assets/oui.jpg">

## 快速上手

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# npm
npm i oui-weapp -S --production

# yarn
yarn add oui-weapp --production
```

### 方式二. 下载代码

直接通过 git 下载 Oui Weapp 源代码，并将`dist`目录拷贝到自己的项目中
```bash
git clone https://github.com/daidai-oui/oui-weapp.git
```

### 如何使用 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "o-button": "../../dist/button/index"
}
```
2. 在 wxml 中使用组件：
```html
<o-button type="primary" bind:click="handleClick">这是一个o按钮</o-button>
```

### 预览所有组件
我们内置了所有组件的示例，您可以扫描右侧的小程序码体验，或按以下方式在微信开发者工具中查看：

```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 目录在微信开发者工具中打开即可。

## 链接

* [更新日志](https://github.com/daidai-oui/oui-weapp/blob/dev/docs/markdown/changelog.md)
* [意见反馈](https://github.com/daidai-oui/oui-weapp/issues)

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。