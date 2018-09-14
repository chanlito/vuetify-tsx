import { ofType } from 'vue-tsx-support';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextField').VTextField,
);

interface Props {
  errorMessages?: string;
  label?: string;
  name?: string;
  prependIcon?: string;
  value?: string;
}

interface Events {
  onInput: (payload: string) => void;
}
