import { VAvatar } from '@/index';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const AvatarExample1 = component({
  render() {
    return (
      <div>
        <SubTitle>Avatar</SubTitle>
        <VAvatar size={50}>
          <img src="https://via.placeholder.com/50" alt="Avatar Image" />
        </VAvatar>
        <VAvatar size={50} tile>
          <img src="https://via.placeholder.com/50" alt="Avatar Image" />
        </VAvatar>
      </div>
    );
  },
});

export default AvatarExample1;
