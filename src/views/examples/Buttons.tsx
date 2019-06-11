import VBtn from '@/components/VBtn';
import VBtnToggle from '@/components/VBtnToggle';
import VContainer from '@/components/VContainer';
import VDivider from '@/components/VDivider';
import VFlex from '@/components/VFlex';
import VIcon from '@/components/VIcon';
import VLayout from '@/components/VLayout';
import { component } from 'vue-tsx-support';

const Buttons = component({
  name: 'Buttons',
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Alerts</h2>
        <VContainer grid-list-lg>
          <VLayout wrap>
            <VFlex>
              <VBtn color="primary">Normal</VBtn>
            </VFlex>
            <VFlex>
              <VBtn color="success" depressed>
                Depressed
              </VBtn>
            </VFlex>
            <VFlex>
              <VBtn color="info" round>
                Round
              </VBtn>
            </VFlex>
            <VFlex>
              <VBtn outline>Outline</VBtn>
            </VFlex>
            <VFlex>
              <VBtn color="error" text>
                Flat
              </VBtn>
            </VFlex>
          </VLayout>
        </VContainer>
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
