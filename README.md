# @abhishek-parmar1/flexy

[![npm (scoped)](https://img.shields.io/npm/v/@abhishek-parmar1/flexy.svg)](https://github.com/abhishek-parmar1/flexy)

Its the tinest layout library.

## Install

```
$ npm install @abhishek-parmar1/flexy
```

## Usage

```js
const tiny = require("@abhishek-parmar1/flexy");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
