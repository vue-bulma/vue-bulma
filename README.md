# vue-bulma

A modern UI framework based on [Vue] and [Bulma].

### Install

Install with npm:

```
$ npm i vue-bulma --save
```

Install with yarn:

```
$ yarn add vue-bulma
```

### Example

```js
import Vue from 'vue'
import * as components from 'vue-bulma'

// In the global registration
for (const [key, value] of Object.entries(components)) {
  const name = value.name || `vb-${key.toLowerCase()}`
  Vue.component(name, value)
}
```

## Development

We use [Lerna] to manage multiple packages.

```
$ npm i lerna --global 
```

```
$ yarn bootstrap
```

### Open Examples


```
$ yarn dev
```

### Create a package

```
# vue-bulma-container
$ lerna create vue-bulma-container
$ lerna add vue packages/vue-bulma-container/
$ lerna add bulma packages/vue-bulma-container/
$ cd packages/vue-bulma-container/
$ mkdir src
$ touch src/main.js
$ touch src/style.scss
```

### Add to `vue-bulma`

```
$ lerna add vue-bulma-container packages/vue-bulma/
```

## Team

### Lead Maintainers

- [**fundon**](https://github.com/fundon), <https://twitter.com/_fundon>, <https://www.npmjs.com/~fundon>

### Collaborators

- [**fundon**](https://github.com/fundon), <https://twitter.com/_fundon>, <https://www.npmjs.com/~fundon>

## License

Licensed under [MIT](./LICENSE).

[vue]: https://vuejs.org
[bulma]: https://bulma.io
[lerna]: https://lernajs.io
