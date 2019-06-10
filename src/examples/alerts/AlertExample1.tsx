import { VAlert } from '@/index';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const AlertExample1 = component({
  render() {
    return (
      <div>
        <SubTitle>Alert</SubTitle>
        <VAlert color="success" value={true}>
          Awesome!
        </VAlert>
        <VAlert value={true}>Oh !@#$!</VAlert>
      </div>
    );
  },
});

export default AlertExample1;
