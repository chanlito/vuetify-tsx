import VBadge from '@/components/VBadge';
import VIcon from '@/components/VIcon';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const BadgeExample1 = component({
  render() {
    return (
      <div>
        <SubTitle>Badge</SubTitle>
        <VBadge left>
          <span slot="badge">6</span>
          <VIcon large>shopping_cart</VIcon>
        </VBadge>
        <VBadge color="accent" overlap>
          <span slot="badge">99</span>
          <VIcon large>mail</VIcon>
        </VBadge>
      </div>
    );
  },
});

export default BadgeExample1;
