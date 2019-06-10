import VBtn from '@/components/VBtn';
import VBtnToggle from '@/components/VBtnToggle';
import VDivider from '@/components/VDivider';
import VIcon from '@/components/VIcon';
import VLayout from '@/components/VLayout';
import { component } from 'vue-tsx-support';

const Buttons = component({
  name: 'Buttons',
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Alerts</h2>
        <VLayout>
          <VBtn color="primary">Click Me!</VBtn>
          <VBtn depressed>Click Me!</VBtn>
          <VBtn outline>Click Me!</VBtn>
          <VBtn flat>Click Me!</VBtn>
        </VLayout>
        <VDivider class="my-5" />
        <VLayout>
          <VBtnToggle>
            <VBtn>
              <VIcon>format_align_left</VIcon>
            </VBtn>
            <VBtn>
              <VIcon>format_align_center</VIcon>
            </VBtn>
            <VBtn>
              <VIcon>format_align_right</VIcon>
            </VBtn>
          </VBtnToggle>
        </VLayout>
      </div>
    );
  },
});

export default Buttons;
