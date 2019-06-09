import { component } from 'vue-tsx-support';

const SubTitle = component({
  render() {
    return <h2 class="title font-weight-bold my-5">{this.$slots.default}</h2>;
  },
});

export default SubTitle;
