import { ofType } from 'vue-tsx-support';
import { VContainer } from 'vuetify/lib';

export default ofType<Props>().convert(VContainer as any);

type Props = {
  fluid?: boolean;
};
