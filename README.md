# Vuetify TSX

Vuetify TSX is just a wrapper lib around vuetify components.

This lib uses `vue-tsx-support` under the hood to support TSX (JSX for TypeScript).

## Setup

```bash
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

## LICENSE

MIT
