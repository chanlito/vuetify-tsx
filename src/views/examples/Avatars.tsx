import VAvatar from '@/components/VAvatar';
import { component } from 'vue-tsx-support';

const Avatars = component({
  name: 'Avatars',
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Avatars</h2>
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

export default Avatars;
