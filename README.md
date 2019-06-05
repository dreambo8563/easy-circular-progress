[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9d5901431eb1423192c2ace8bd5064d3)](https://app.codacy.com/app/dreambo8563/easy-circular-progress?utm_source=github.com&utm_medium=referral&utm_content=dreambo8563/easy-circular-progress&utm_campaign=Badge_Grade_Dashboard)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![codecov](https://codecov.io/gh/dreambo8563/easy-circular-progress/branch/master/graph/badge.svg)](https://codecov.io/gh/dreambo8563/easy-circular-progress)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/dt/easy-circular-progress.svg?style=flat)
[![Build Status](https://travis-ci.com/dreambo8563/easy-circular-progress.svg?branch=master)](https://travis-ci.com/dreambo8563/easy-circular-progress)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Feasy-circular-progress.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Feasy-circular-progress?ref=badge_shield)
[![Greenkeeper badge](https://badges.greenkeeper.io/dreambo8563/easy-circular-progress.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dreambo8563/easy-circular-progress/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dreambo8563/easy-circular-progress?targetFile=package.json)

# easy-circular-progress

## Install

```
npm install easy-circular-progress --save
```

### Quick Start

```js
<template>
  <div id="app">
    <Progress value="16.88">
      <!-- <template v-slot:footer>
        <b>goood</b>
      </template>-->
    </Progress>
    <Progress strokeColor="#FF00AA" value="16.88">
      <template v-slot:footer>
        <b>More Color</b>
      </template>
    </Progress>

    <Progress :radius="50" :strokeWidth="10" value="86.12">
      <template v-slot:footer>
        <b>Bolder & Bigger One</b>
      </template>
    </Progress>

    <Progress
      :transitionDuration="5000"
      :radius="50"
      :strokeWidth="10"
      value="86.12"
    >
      <template v-slot:footer>
        <b>Slow One</b>
      </template>
    </Progress>

    <Progress
      :transitionDuration="5000"
      :radius="55"
      :strokeWidth="10"
      value="86.12567"
    >
      <template v-slot:footer>
        <b>More Precise</b>
      </template>
    </Progress>

    <Progress :transitionDuration="5000" :radius="55" :strokeWidth="10" value="86.12567">
      <div class="content">hello</div>
      <template v-slot:footer>
        <b>More Precise</b>
      </template>
    </Progress>
  </div>
</template>

<script>
import Progress from "./index.vue";

export default {
  name: "app",
  components: {
    Progress
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #fff;
  background: #3e423a;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  padding: 0;
}
</style>

```

### Prop Types

| Property           | Type             | Required? | Description                                                           |
| :----------------- | :--------------- | :-------- | :-------------------------------------------------------------------- |
| strokeWidth        | Number           |           | default is 4, the width of the progress circle, the bigger the bolder |
| radius             | Number           |           | the inner circle radius, default is 38                                |
| transitionDuration | Number           |           | default is 1000, transitionDuration for the animation                 |
| strokeColors       | String           |           | default is "#aaff00"                                                  |
| value              | Number \| String |           | default is 0.0, should be less or equal then 100                      |

### Slot

| Slot Name | Description                         |
| :-------- | ----------------------------------- |
| footer    | we can add a footer for the circle  |
| default   | the content displayed in the circle |

> if default slot provided, the coutdown effect will be ignored.

### Advance Guide

#### Customized Theme

- In your customized scss file (demo.scss)

```scss
$--circular-progress-int-fz: 28px;
$--circular-progress-dec-fz: 12px;
@import '~easy-circular-progress/src/index';
```

- import the scss to override the default theme in main.js (entry file) before you import the Draw component

```js
import './demo.scss';
```

> variables

We split the number into two parts (int, dec)
We can define the font-size for each part

- \$--circular-progress-int-fz: 28px;
- \$--circular-progress-dec-fz: 12px;

#### Possibly Polyfill

```js
Number.isNaN =
  Number.isNaN ||
  function(value) {
    return value !== value;
  };
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-circular-progress.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdreambo8563%2Fvue-circular-progress?ref=badge_large)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://dreambo8563.github.io/"><img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub></a><br /><a href="https://github.com/dreambo8563/vue-circular-progress/commits?author=dreambo8563" title="Code">💻</a> <a href="https://github.com/dreambo8563/vue-circular-progress/commits?author=dreambo8563" title="Documentation">📖</a> <a href="#infra-dreambo8563" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
