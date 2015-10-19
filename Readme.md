# deets

Library to get browser details. Name, version, size, etc.

## Installation

`npm install deets`

And use via [browserify](https://github.com/substack/node-browserify).

## Example



``` js
deets();

{  
  name: "Chrome",
  version: {
    full: "46.0.2490.71",
    major: 46,  
  },  
  size: {
    width: 1440,
    height: 900
  },
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) Ap…ML, like Gecko) Chrome/46.0.2490.71 Safari/537.36",
}
```
