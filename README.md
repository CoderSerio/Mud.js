<h1 align="center"> Mud.js </h1>
<h3 align="center"> Mini UI-Build Dependence </h3>
<br/>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.3.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>



## Introduction
<h3> Quickly build light web applications with Mud.js !</h3>

You can learn about Mud.js more by ✨ [👉 Clicking 👈](https://coderserio.github.io/Mud.js) ✨

<br/>

## Getting Started

```bash
# Install project builder
npm i @trickle/mud-cli -g

# Create a mud project
mud-cli create <name>
```



## Development
When developing Mud.js, Here are some usual methods to make program execution result more intuitive:



**Method 0**

The most simple way is setting `src` of `<script>` to the entry file path, like this:

```html
<script type="module" src="../src/index/js"></script>
```

Or do the same thing like this: 

```js
import Mud from '../src/index/js'
```


**Method 1**

Build the package and start a dev-server with `rollup` for hot module replacement:

```shell
npm run build:dev
```


**Method 2**

Use `yalc` to simulate publishing npm package:

```shell
npm i yalc -g

yalc publish

yalc add @trickle/mud.js

# Update the package
yalc push
```

Publish new version:

```shell
# Generate change-set file
npx changeset

# Update version
npx changeset version
```


## Contributors

Thanks for all people mentioned below:
<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/CoderSerio">
            <img src="https://avatars.githubusercontent.com/u/79406469?v=4" width="50;" alt="CoderSerio"/>
            <br />
            <sub><b>Carbon Serio</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Tosuke-sama">
            <img src="https://avatars.githubusercontent.com/u/91041842?v=4" width="50;" alt="Tosuke-sama"/>
            <br />
            <sub><b>TosukeLi</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

## License

[MIT](https://opensource.org/licenses/MIT)