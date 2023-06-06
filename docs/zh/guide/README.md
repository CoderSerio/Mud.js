# 文档

## 概览
### 简介

`Mud.js`是一个用于快速构建**Web UI**的小型库！在语法和实现上参考了`Vue`、`React(JSX)`、`Svelte`和`Wujie`等优秀的前端库或框架，并且尽可能地降低初学者的学习成本！

只需要了解非常基本的HTML、CSS和JS知识，通过`Mud.js`即可快速构建轻型Web应用。

> 是的，`Mud.js`或许就像一个熟悉的陌生人！


### 快速开始

推荐使用脚手架工具直接构建工程化模板:

```bash
# 安装项目脚手架
npm i @trickle/mud-cli -g

# 使用脚手架快速构建项目, 其中<name>是你的项目名字
mud-cli create <name>

# 进入创建的项目
cd <name>

# 安装项目所需依赖
npm i

# 启动项目
npm run dev
```

也可以在项目单独安装`Mud.js`的核心库来满足不同的场景需求:

> 目前提供了UMD, CJS和ESM三种模块化类型的包！

<CodeGroup>
<CodeGroupItem title="NPM">
  
```bash
npm install @trickle/mud.js
```

</CodeGroupItem>

<CodeGroupItem title="PNPM" active>

```bash
pnpm i @trickle/mud.js
```

</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add @trickle/mud.js
```

</CodeGroupItem>

</CodeGroup>

## 基础能力

接下我们会尽可能精简代码，更契合主题地介绍`Mud.js`的基本用法。

> 注意！以下模块化相关代码均以ESM为例。其他模块化类型同理。

### 核心类
`Mud.js`为开发者暴露了一个`Mud`类，开发者据此便能够使用`Mud.js`的能力，从而简化开发。

而使用的方式也很简单，只需要像下面这样:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Mud.js</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({el: '#app'});
</script>
```
</CodeGroupItem>
</CodeGroup>

上述代码将在`window`对象上创建一个`mud`实例，可以通过`window.mud`对其进行访问。

其中，`el`表示被选中的`DOM`节点，该节点下的所有子节点都将获得`Mud.js`提供的能力。

> 接下来我们会进一步精简不必要的代码，尽可能地突出重点！
### 插值语法


#### 内容插值

插值语法允许在`HTML`结构中便捷地使用`JS`变量:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">Say: {title}</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      title: 'Hello Mud!'
    }
  });
</script>
```
</CodeGroupItem>
</CodeGroup>

上述代码中的`{title}`将被渲染为`Hello Mud！`。当变量`title`发生改变时，渲染的内容也随之改变。

#### 属性插值
除了可以在`DOM`元素的内容中插值，还可以在属性中插值:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">
  <div>{msg}</div>
  <input type="text" value="{msg}">
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      msg: 'Hello Mud!'
    }
  });
</script>
```
</CodeGroupItem>
</CodeGroup>


### 渲染控制
`Mud.js`为`DOM`提供了一些特殊的属性，这些属性的值将自动映射到`Mud`实例的`data`上而无需再使用插值语法。

#### 条件渲染

像许多常见的编程语言一样使用`if`, `else-if`和`else`关键字对渲染进行控制:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">
  <button onclick="isShow()">Show?</button>
  <div if="ifShow">
    Now You See Me!
  </div>
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      ifShow: false
    }
  });
</script>

<script>
  const isShow = ()=>{
    mud.data.ifShow = !mud.data.ifShow
  }
</script>
```
</CodeGroupItem>
</CodeGroup>

或许刚入门的开发者对上述代码中存在两个`<script>`感到困惑——这是因为第一个`<script>`为`ESM`模块, `DOM`元素中无法直接获取到其中的函数，所以需要再加上一个`UMD`模块来提供需要的函数。

#### 循环渲染

类似地，`Mud.js`提供了`for`语句处理大量重复的结构:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">
  <div for="i:arr"> {i} </div>
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    }
  });
</script>
```
</CodeGroupItem>
</CodeGroup>


> 不久后的未来还会支持对`下标索引`的获取！

### 组件

#### 基本使用

就像是把能复用的代码封装成函数一样——创建多个`html`文件，然后非常简单地使用它们:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">
  <component></component>
  <component></component>
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    components: {
      component: 'component.html'
    }
  });
</script>
```
</CodeGroupItem>

<CodeGroupItem title="component.html">

```html
<div id="app">
  <div>{msg}</div>
  <input type="text" value="{msg}">
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      msg: 'Hello Mud!'
    }
  });
</script>
```
</CodeGroupItem>
</CodeGroup>


在`components`中将另一个挂载了`Mud`实例的`html`文件注册为组件，填写组件名及其路径即可进行使用。

> 该路径甚至可以是一个远程URL！

#### 组件通信

`Mud.js`支持父子组间直接通信，方式也非常简单——通过`props`属性向子组件传递参数，子组件的`Mud`实例的`data`会接收到这些参数，并且子组件能够直接修改父组件传递的参数:

<CodeGroup>
<CodeGroupItem title="index.html">

```html
<div id="app">
  <div>{msg}</div>
  <component props="{msg}"></component>
  <component props="{msg}"></component>
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: { msg: 'hi!' },
    components: {
      component: 'component.html'
    }
  });
</script>
```
</CodeGroupItem>

<CodeGroupItem title="component.html">

```html
<div id="app">
  <div>{msg}</div>
  <input type="text" value="{msg}">
</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      msg: ''
    }
  });
</script>
```
</CodeGroupItem>
</CodeGroup>


当然，支持传递多个参数以及重命名字段避免冲突:

```html
<component props="{msg, data:name}"></component>
```


### 生命周期
能够在特定的时刻触发指定的函数。
#### onMount

在组件挂载到`DOM`节点这一过程完成时触发:

```javascript
new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud',
  },
  onMount: () => {
    console.log(mud.data.msg);
  }
});

```