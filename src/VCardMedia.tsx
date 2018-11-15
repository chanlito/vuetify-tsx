import { ofType } from 'vue-tsx-support';
import { VCardMedia } from 'vuetify/lib';

import { Imageable, Measurable } from './types';

export default ofType<Props>().convert(VCardMedia as any);

type Props = Imageable & Measurable & {};
