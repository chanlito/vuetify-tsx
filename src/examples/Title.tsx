import { component } from 'vue-tsx-support';

const Title = component({
  render() {
    return (
      <h1 class="display-1 font-weight-bold mb-4">{this.$slots.default}</h1>
    );
  },
});

export default Title;
