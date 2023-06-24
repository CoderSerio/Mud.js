import{_ as c,M as a,p as r,q as u,N as n,V as i,a1 as l,R as e}from"./framework-5866ffd3.js";const t={},o=l(`<h1 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h1><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p><code>Mud.js</code>是一个用于快速构建<strong>Web UI</strong>的小型库！在语法和实现上参考了<code>Vue</code>、<code>React(JSX)</code>、<code>Svelte</code>和<code>Wujie</code>等优秀的前端库或框架，并且尽可能地降低初学者的学习成本！</p><p>只需要了解非常基本的HTML、CSS和JS知识，通过<code>Mud.js</code>即可快速构建轻型Web应用。</p><blockquote><p>是的，<code>Mud.js</code>或许就像一个熟悉的陌生人！</p></blockquote><h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3><p>推荐使用脚手架工具直接构建工程化模板:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 安装项目脚手架
npm i @trickle/mud-cli -g

# 使用脚手架快速构建项目, 其中&lt;name&gt;是你的项目名字
mud-cli create &lt;name&gt;

# 进入创建的项目
cd &lt;name&gt;

# 安装项目所需依赖
npm i

# 启动项目
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在项目单独安装<code>Mud.js</code>的核心库来满足不同的场景需求:</p><blockquote><p>目前提供了UMD, CJS和ESM三种模块化类型的包！</p></blockquote>`,11),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm i @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn add @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),h=l('<h2 id="基础能力" tabindex="-1"><a class="header-anchor" href="#基础能力" aria-hidden="true">#</a> 基础能力</h2><p>接下我们会尽可能精简代码，更契合主题地介绍<code>Mud.js</code>的基本用法。</p><blockquote><p>注意！以下模块化相关代码均以ESM为例。其他模块化类型同理。</p></blockquote><h3 id="核心类" tabindex="-1"><a class="header-anchor" href="#核心类" aria-hidden="true">#</a> 核心类</h3><p><code>Mud.js</code>为开发者暴露了一个<code>Mud</code>类，开发者据此便能够使用<code>Mud.js</code>的能力，从而简化开发。</p><p>而使用的方式也很简单，只需要像下面这样:</p>',6),p=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=l('<p>上述代码将在<code>window</code>对象上创建一个<code>mud</code>实例，可以通过<code>window.mud</code>对其进行访问。</p><p>其中，<code>el</code>表示被选中的<code>DOM</code>节点，该节点下的所有子节点都将获得<code>Mud.js</code>提供的能力。</p><blockquote><p>接下来我们会进一步精简不必要的代码，尽可能地突出重点！</p></blockquote><h3 id="插值语法" tabindex="-1"><a class="header-anchor" href="#插值语法" aria-hidden="true">#</a> 插值语法</h3><h4 id="内容插值" tabindex="-1"><a class="header-anchor" href="#内容插值" aria-hidden="true">#</a> 内容插值</h4><p>插值语法允许在<code>HTML</code>结构中便捷地使用<code>JS</code>变量:</p>',6),_=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">Say: {title}</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      title: 'Hello Mud!'
    }
  });
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=l('<p>上述代码中的<code>{title}</code>将被渲染为<code>Hello Mud！</code>。当变量<code>title</code>发生改变时，渲染的内容也随之改变。</p><h4 id="属性插值" tabindex="-1"><a class="header-anchor" href="#属性插值" aria-hidden="true">#</a> 属性插值</h4><p>除了可以在<code>DOM</code>元素的内容中插值，还可以在属性中插值:</p>',3),M=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=l('<h3 id="渲染控制" tabindex="-1"><a class="header-anchor" href="#渲染控制" aria-hidden="true">#</a> 渲染控制</h3><p><code>Mud.js</code>为<code>DOM</code>提供了一些特殊的属性，这些属性的值将自动映射到<code>Mud</code>实例的<code>data</code>上而无需再使用插值语法。</p><h4 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h4><p>像许多常见的编程语言一样使用<code>if</code>, <code>else-if</code>和<code>else</code>关键字对渲染进行控制:</p>',4),k=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>

<script>
  const isShow = ()=>{
    mud.data.ifShow = !mud.data.ifShow
  }
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=l('<p>或许刚入门的开发者对上述代码中存在两个<code>&lt;script&gt;</code>感到困惑——这是因为第一个<code>&lt;script&gt;</code>为<code>ESM</code>模块, <code>DOM</code>元素中无法直接获取到其中的函数，所以需要再加上一个<code>UMD</code>模块来提供需要的函数。</p><h4 id="循环渲染" tabindex="-1"><a class="header-anchor" href="#循环渲染" aria-hidden="true">#</a> 循环渲染</h4><p>类似地，<code>Mud.js</code>提供了<code>for</code>语句处理大量重复的结构:</p>',3),w=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=l('<blockquote><p>不久后的未来还会支持对<code>下标索引</code>的获取！</p></blockquote><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4><p>就像是把能复用的代码封装成函数一样——创建多个<code>html</code>文件，然后非常简单地复用并组合它们！</p><blockquote><p>点击下方标签页可以显示不同的HTML文件内容</p></blockquote>',5),q=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=l('<p>在<code>components</code>中将另一个挂载了<code>Mud</code>实例的<code>html</code>文件注册为组件，填写组件名及其路径即可进行使用。</p><blockquote><p>该路径甚至可以是一个远程URL！</p></blockquote><h4 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h4><p><code>Mud.js</code>支持父子组间直接通信，方式也非常简单——通过<code>props</code>属性向子组件传递参数，子组件的<code>Mud</code>实例的<code>data</code>会接收到这些参数，并且子组件能够直接修改父组件传递的参数:</p>',4),D=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=l(`<p>当然，支持传递多个参数以及重命名字段避免冲突:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;component props=&quot;{msg, data:name}&quot;&gt;&lt;/component&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p>能够在特定的时刻触发指定的函数。</p><h4 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount" aria-hidden="true">#</a> onMount</h4><p>在组件挂载到<code>DOM</code>节点这一过程完成时触发:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>new Mud({
  el: &#39;#app&#39;,
  data: {
    msg: &#39;Hello Mud&#39;,
  },
  onMount: () =&gt; {
    console.log(mud.data.msg);
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function O(E,L){const d=a("CodeGroupItem"),s=a("CodeGroup");return r(),u("div",null,[o,n(s,null,{default:i(()=>[n(d,{title:"NPM"},{default:i(()=>[m]),_:1}),n(d,{title:"PNPM",active:""},{default:i(()=>[v]),_:1}),n(d,{title:"YARN"},{default:i(()=>[b]),_:1})]),_:1}),h,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[p]),_:1})]),_:1}),g,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[_]),_:1})]),_:1}),f,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[M]),_:1})]),_:1}),x,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[k]),_:1})]),_:1}),j,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[w]),_:1})]),_:1}),S,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[q]),_:1}),n(d,{title:"component.html"},{default:i(()=>[y]),_:1})]),_:1}),C,n(s,null,{default:i(()=>[n(d,{title:"index.html"},{default:i(()=>[D]),_:1}),n(d,{title:"component.html"},{default:i(()=>[H]),_:1})]),_:1}),N])}const B=c(t,[["render",O],["__file","index.html.vue"]]);export{B as default};
