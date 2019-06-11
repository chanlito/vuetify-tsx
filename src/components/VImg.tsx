import { ofType } from 'vue-tsx-support';
import { VImg } from 'vuetify/lib';

import { Imageable, Measurable } from '../types/props';

export default ofType<Props>().convert(VImg as any);

type Props = Imageable & Measurable & {};
