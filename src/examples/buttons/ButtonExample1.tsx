import VBtn from '@/components/VBtn';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const ButtonExample1 = component({
  render() {
    return (
      <div>
        <SubTitle>Button</SubTitle>
        <VBtn color="primary">Click Me!</VBtn>
        <VBtn depressed>Click Me!</VBtn>
        <VBtn outline>Click Me!</VBtn>
        <VBtn flat>Click Me!</VBtn>
      </div>
    );
  },
});

export default ButtonExample1;
