# Vuetify TSX

Vuetify TSX is just a wrapper lib around vuetify components.

This lib uses [`vue-tsx-support`](https://github.com/wonderful-panda/vue-tsx-support) under the hood to support TSX (JSX for TypeScript).

## Setup

```bash
npm install vuetify-tsx
```

## Usage

```tsx
import { VApp, VContent } from 'vuetify-tsx';
import { component } from 'vue-tsx-support';

const App = component({
  name: 'App',
  render() {
    return (
      <VApp>
        <VContent>
          <router-view />
        </VContent>
      </VApp>
    );
  },
});

export default App;
```

## Tip

Use `babel-plugin-import` to reduce bundle size.

```js
{
  plugins: [
    [
      'import',
      {
        libraryName: 'vuetify-tsx',
        libraryDirectory: 'components',
        camel2DashComponentName: false,
      },
    ],
  ],
}
```

## LICENSE

MIT
