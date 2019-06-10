# Vuetify TSX

Vuetify TSX is just a wrapper lib around vuetify components.

This lib uses [`vue-tsx-support`](https://github.com/wonderful-panda/vue-tsx-support) under the hood to support TSX (JSX for TypeScript).

## Setup

```bash
yarn add vuetify-tsx
# OR
npm install vuetify-tsx
```

## Usage

```tsx
import { component } from 'vue-tsx-support';
import { VApp, VContent } from 'vuetify-tsx';

export default component({
  name: 'Default',
  render() {
    return (
      <VApp>
        <VContent>
          <nuxt />
        </VContent>
      </VApp>
    );
  },
});
```

For more examples, see the [examples](./src/examples) folder in this repository.  
You can see the examples by checking out the project and using `npm install` and then `npm run serve`.

## Tip

Use `babel-plugin-import` to reduce bundle size.

```js
{
  plugins: [
    [
      'import',
      {
        libraryName: 'vuetify-tsx',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
    ],
  ],
}
```

## Contributors

This project exists thanks to all the people who [contribute](https://github.com/chanlito/vuetify-tsx/graphs/contributors) 🚀!

## LICENSE

[MIT](https://opensource.org/licenses/MIT)
