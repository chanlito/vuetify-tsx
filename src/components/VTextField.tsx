import { ofType } from 'vue-tsx-support';

import { CommonEvents } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextField').VTextField,
);

interface Props {
  errorMessages?: string;
  flat?: boolean;
  hideDetails?: boolean;
  label?: string;
  name?: string;
  prependIcon?: string;
  readonly?: boolean;
  singleLine?: boolean;
  solo?: boolean;
  value?: string;
}

type Events = CommonEvents;
