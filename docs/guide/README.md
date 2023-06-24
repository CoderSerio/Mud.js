# Docs

## Overview

### Introduction

`Mud.js` is a small library for quickly building **Web UI**! It takes inspiration from excellent frontend libraries or frameworks such as `Vue`, `React (JSX)`, `Svelte`, and `Wujie` in terms of syntax and implementation, while aiming to minimize the learning curve for beginners.

With just a basic understanding of HTML, CSS, and JS, you can use `Mud.js`to rapidly build lightweight web applications.

>You might feel like you've seen `Mud.js` in many places before！ 

### Getting Started

We recommend using scaffolding tools to directly build project templates with a standardized structure：
```bash
# install the scaffolding
npm i @trickle/mud-cli -g

# to create your project,the <name> will be the name of your project
mud-cli create <name>

# enter project
cd <name>

# install the dependencies required for the project
npm i

# run the project
npm run dev
```
you can also install `Mud.js` separately in your project to meet various scenario requirements.

>`Mud.js` now provides packages in three modular types: UMD, CommonJS (CJS), and ECMAScript Modules (ESM)

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

## Basic Competence

Next, we will strive to streamline the code and present the basic usage of `Mud.js` in a way that aligns closely with the theme.

>Note: The following modular code examples are based on ECMAScript Modules (ESM). The same principles apply to other modular types as well.

### Core Class


`Mud.js` exposes a `Mud` class to developers, which allow you to leverage the capabilities of `Mud.js` and simplify development.

And the usage is also straightforward, just like the example below:

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

The above code will create a `mud` instance on the `window` object, which allowing access to the DOM by using `window.mud`.

In this code, `el` represents the selected `DOM` node. All the child nodes under this node will have access to the capabilities provided by `Mud.js`.

> Next, we will further streamline unnecessary code and focus on the key aspects as much as possible!

### Tnterpolation Syntax

#### Text Interpolation

Interpolation syntax allows for convenient usage of `JavaScript` variables within an `HTML` structure.

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


The `{title}` in the above code will be rendered as `Hello Mud!` When the `title` variable changes, the rendered content will also update accordingly.

#### Attribute Interpolation
we can also use interpolation syntax in attribute,not only in `Dom`
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

### Rendering Control


In `Mud.js`, there are special attributes provided for the `DOM`, and the values of these attributes will be automatically mapped to the `data` of the `Mud` instance without the need for interpolation syntax.

#### Conditional Rendering

Just like many common programming languages, you can control the rendering using the `if`, `else-if`, and `else` keywords in Mud.js.
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

#### List Rendering

Similarly, `Mud.js` provides the `for` statement to handle repetitive structures with a large number of iterations.

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

> In the near future, `Mud.js` will also support accessing the index of the iteration.

### Components
#### Basic Usage
Just like encapsulating reusable code into functions, with `Mud.js`, you can create multiple `HTML` files and easily reuse and combine them.

> click the tab below to show different HTML file content

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

In `Mud.js`, you can register another `HTML` file that has a mounted `Mud` instance as a component within the components section. Simply provide the component name and its file path to use it.

> The file path can even be a remote URL！

#### Component Communication
`Mud.js` supports direct communication between parent and child components, and the approach is straightforward--You can pass parameters to a child component through the props attribute. The `data `property of the child component's `Mud` instance will receive these parameters, and the child component can directly modify the parameters passed by the parent component.

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

Of course,`Mud.js`supports passing multiple parameters and renaming fields to avoid conflicts.

```html
<component props="{msg, data:name}"></component>
```

### Lifecycle Hooks

Each `Mud` component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

#### onMount

It's triggered when a component is mounted to a DOM node.

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