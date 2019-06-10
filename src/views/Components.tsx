import { Component } from 'vue-property-decorator';
import { Component as TsxComponent } from 'vue-tsx-support';

interface Props {}

@Component
export default class Components extends TsxComponent<Props> {
  render() {
    return <router-view />;
  }
}
