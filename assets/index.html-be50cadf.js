import{_ as c,M as t,p as o,q as r,N as n,V as i,a1 as d,R as e,t as l}from"./framework-5866ffd3.js";const u={},m=d(`<h1 id="docs" tabindex="-1"><a class="header-anchor" href="#docs" aria-hidden="true">#</a> Docs</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p><code>Mud.js</code> is a small library for quickly building <strong>Web UI</strong>! It takes inspiration from excellent frontend libraries or frameworks such as <code>Vue</code>, <code>React (JSX)</code>, <code>Svelte</code>, and <code>Wujie</code> in terms of syntax and implementation, while aiming to minimize the learning curve for beginners.</p><p>With just a basic understanding of HTML, CSS, and JS, you can use <code>Mud.js</code>to rapidly build lightweight web applications.</p><blockquote><p>You might feel like you&#39;ve seen <code>Mud.js</code> in many places before！</p></blockquote><h3 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h3><p>We recommend using scaffolding tools to directly build project templates with a standardized structure：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># install the scaffolding
npm i @trickle/mud-cli -g

# to create your project,the &lt;name&gt; will be the name of your project
mud-cli create &lt;name&gt;

# enter project
cd &lt;name&gt;

# install the dependencies required for the project
npm i

# run the project
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>you can also install <code>Mud.js</code> separately in your project to meet various scenario requirements.</p><blockquote><p><code>Mud.js</code> now provides packages in three modular types: UMD, CommonJS (CJS), and ECMAScript Modules (ESM)</p></blockquote>`,11),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),p=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm i @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn add @trickle/mud.js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=d('<h2 id="basic-competence" tabindex="-1"><a class="header-anchor" href="#basic-competence" aria-hidden="true">#</a> Basic Competence</h2><p>Next, we will strive to streamline the code and present the basic usage of <code>Mud.js</code> in a way that aligns closely with the theme.</p><blockquote><p>Note: The following modular code examples are based on ECMAScript Modules (ESM). The same principles apply to other modular types as well.</p></blockquote><h3 id="core-class" tabindex="-1"><a class="header-anchor" href="#core-class" aria-hidden="true">#</a> Core Class</h3><p><code>Mud.js</code> exposes a <code>Mud</code> class to developers, which allow you to leverage the capabilities of <code>Mud.js</code> and simplify development.</p><p>And the usage is also straightforward, just like the example below:</p>',6),g=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=d('<p>The above code will create a <code>mud</code> instance on the <code>window</code> object, which allowing access to the DOM by using <code>window.mud</code>.</p><p>In this code, <code>el</code> represents the selected <code>DOM</code> node. All the child nodes under this node will have access to the capabilities provided by <code>Mud.js</code>.</p><blockquote><p>Next, we will further streamline unnecessary code and focus on the key aspects as much as possible!</p></blockquote><h3 id="tnterpolation-syntax" tabindex="-1"><a class="header-anchor" href="#tnterpolation-syntax" aria-hidden="true">#</a> Tnterpolation Syntax</h3><h4 id="text-interpolation" tabindex="-1"><a class="header-anchor" href="#text-interpolation" aria-hidden="true">#</a> Text Interpolation</h4><p>Interpolation syntax allows for convenient usage of <code>JavaScript</code> variables within an <code>HTML</code> structure.</p>',6),_=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">Say: {title}</div>

<script type="module">
  import Mud from '@trickle/mud.js';
  new Mud({
    el: '#app',
    data: {
      title: 'Hello Mud!'
    }
  });
<\/script>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("p",null,[l("The "),e("code",null,"{title}"),l(" in the above code will be rendered as "),e("code",null,"Hello Mud!"),l(" When the "),e("code",null,"title"),l(" variable changes, the rendered content will also update accordingly.")],-1),M=e("h4",{id:"attribute-interpolation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attribute-interpolation","aria-hidden":"true"},"#"),l(" Attribute Interpolation")],-1),y=e("p",null,[l("we can also use interpolation syntax in attribute,not only in "),e("code",null,"Dom")],-1),x=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=d('<h3 id="rendering-control" tabindex="-1"><a class="header-anchor" href="#rendering-control" aria-hidden="true">#</a> Rendering Control</h3><p>In <code>Mud.js</code>, there are special attributes provided for the <code>DOM</code>, and the values of these attributes will be automatically mapped to the <code>data</code> of the <code>Mud</code> instance without the need for interpolation syntax.</p><h4 id="conditional-rendering" tabindex="-1"><a class="header-anchor" href="#conditional-rendering" aria-hidden="true">#</a> Conditional Rendering</h4><p>Just like many common programming languages, you can control the rendering using the <code>if</code>, <code>else-if</code>, and <code>else</code> keywords in Mud.js.</p>',4),j=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=e("h4",{id:"list-rendering",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#list-rendering","aria-hidden":"true"},"#"),l(" List Rendering")],-1),q=e("p",null,[l("Similarly, "),e("code",null,"Mud.js"),l(" provides the "),e("code",null,"for"),l(" statement to handle repetitive structures with a large number of iterations.")],-1),C=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=d('<blockquote><p>In the near future, <code>Mud.js</code> will also support accessing the index of the iteration.</p></blockquote><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h3><h4 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h4><p>Just like encapsulating reusable code into functions, with <code>Mud.js</code>, you can create multiple <code>HTML</code> files and easily reuse and combine them.</p><blockquote><p>click the tab below to show different HTML file content</p></blockquote>',5),I=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=d('<p>In <code>Mud.js</code>, you can register another <code>HTML</code> file that has a mounted <code>Mud</code> instance as a component within the components section. Simply provide the component name and its file path to use it.</p><blockquote><p>The file path can even be a remote URL！</p></blockquote><h4 id="component-communication" tabindex="-1"><a class="header-anchor" href="#component-communication" aria-hidden="true">#</a> Component Communication</h4><p><code>Mud.js</code> supports direct communication between parent and child components, and the approach is straightforward--You can pass parameters to a child component through the props attribute. The <code>data </code>property of the child component&#39;s <code>Mud</code> instance will receive these parameters, and the child component can directly modify the parameters passed by the parent component.</p>',4),D=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div id="app">
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
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=d(`<p>Of course,<code>Mud.js</code>supports passing multiple parameters and renaming fields to avoid conflicts.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;component props=&quot;{msg, data:name}&quot;&gt;&lt;/component&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> Lifecycle Hooks</h3><p>Each <code>Mud</code> component instance goes through a series of initialization steps when it&#39;s created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.</p><h4 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount" aria-hidden="true">#</a> onMount</h4><p>It&#39;s triggered when a component is mounted to a DOM node.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>new Mud({
  el: &#39;#app&#39;,
  data: {
    msg: &#39;Hello Mud&#39;,
  },
  onMount: () =&gt; {
    console.log(mud.data.msg);
  }
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function A(E,J){const s=t("CodeGroupItem"),a=t("CodeGroup");return o(),r("div",null,[m,n(a,null,{default:i(()=>[n(s,{title:"NPM"},{default:i(()=>[h]),_:1}),n(s,{title:"PNPM",active:""},{default:i(()=>[p]),_:1}),n(s,{title:"YARN"},{default:i(()=>[v]),_:1})]),_:1}),b,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[g]),_:1})]),_:1}),f,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[_]),_:1})]),_:1}),w,M,y,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[x]),_:1})]),_:1}),k,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[j]),_:1})]),_:1}),S,q,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[C]),_:1})]),_:1}),T,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[I]),_:1}),n(s,{title:"component.html"},{default:i(()=>[N]),_:1})]),_:1}),H,n(a,null,{default:i(()=>[n(s,{title:"index.html"},{default:i(()=>[D]),_:1}),n(s,{title:"component.html"},{default:i(()=>[L]),_:1})]),_:1}),O])}const B=c(u,[["render",A],["__file","index.html.vue"]]);export{B as default};
