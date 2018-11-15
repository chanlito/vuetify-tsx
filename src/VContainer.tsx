import * as tsx from 'vue-tsx-support';
import { VContainer } from 'vuetify/lib';

export default tsx.ofType<Props>().convert(VContainer as any);

type Props = {
  'fill-height'?: boolean;
  fluid?: boolean;
};
