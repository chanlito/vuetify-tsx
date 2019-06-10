import VAlert from '@/components/VAlert';
import { component } from 'vue-tsx-support';

const Alerts = component({
  name: 'Alerts',
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Alerts</h2>
        <VAlert type="success" value={true}>
          Awesome!
        </VAlert>
        <VAlert type="info" value={true}>
          I'm Okay!
        </VAlert>
        <VAlert type="error" value={true} dismissible>
          Oh !@#$!
        </VAlert>
      </div>
    );
  },
});

export default Alerts;
