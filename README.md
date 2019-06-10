# Vuetify TSX

Vuetify TSX is just a wrapper lib around vuetify components.

This lib uses [`vue-tsx-support`](https://github.com/wonderful-panda/vue-tsx-support) under the hood to support TSX (JSX for TypeScript).

## Setup

```bash
npm install vuetify-tsx
```

## Usage

```tsx
import { component } from 'vue-tsx-support';

import { VApp, VContent } from 'vuetify-tsx';

// or import directly
import VApp from 'vuetify-tsx/lib/components/VApp';
import VContent from 'vuetify-tsx/lib/components/VContent';

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
// inside babel.config.js
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vuetify-tsx',
        libraryDirectory: 'lib/components',
        camel2DashComponentName: false,
      },
    ],
  ],
};
```

## LICENSE

MIT
