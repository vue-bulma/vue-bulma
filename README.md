# vue-bulma

A modern UI framework based on [Vue](http://vuejs.org) and [Bulma](http://bulma.io).

### Install

Install with npm:
```
npm i vue-bulma --save
```
Install with yarn:
```
yarn add vue-bulma
```

### Example

```js
import Vue from 'vue'
import * as components from 'vue-bulma'

# In the global registration 
for (const [key, value] of Object.entries(components)) {
  const name = value.name || `vb-${key.toLowerCase()}`
  Vue.component(name, value)
}
```

## Team

### Lead Maintainers

* [__Fangdun Cai__](https://github.com/fundon), <https://twitter.com/_fundon>, <https://www.npmjs.com/~fundon>

### Collaborators

* [__Fangdun Cai__](https://github.com/fundon), <https://twitter.com/_fundon>, <https://www.npmjs.com/~fundon>

## License

Licensed under [MIT](./LICENSE).
