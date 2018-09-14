import { ofType } from 'vue-tsx-support';

export default ofType<Props>().convert(
  require('vuetify/es5/components/VGrid').VFlex,
);

interface Props {
  xs1?: boolean;
  xs2?: boolean;
  xs3?: boolean;
  xs4?: boolean;
  xs5?: boolean;
  xs6?: boolean;
  xs7?: boolean;
  xs8?: boolean;
  xs9?: boolean;
  xs10?: boolean;
  xs11?: boolean;
  xs12?: boolean;

  sm1?: boolean;
  sm2?: boolean;
  sm3?: boolean;
  sm4?: boolean;
  sm5?: boolean;
  sm6?: boolean;
  sm7?: boolean;
  sm8?: boolean;
  sm9?: boolean;
  sm10?: boolean;
  sm11?: boolean;
  sm12?: boolean;

  md1?: boolean;
  md2?: boolean;
  md3?: boolean;
  md4?: boolean;
  md5?: boolean;
  md6?: boolean;
  md7?: boolean;
  md8?: boolean;
  md9?: boolean;
  md10?: boolean;
  md11?: boolean;
  md12?: boolean;

  lg1?: boolean;
  lg2?: boolean;
  lg3?: boolean;
  lg4?: boolean;
  lg5?: boolean;
  lg6?: boolean;
  lg7?: boolean;
  lg8?: boolean;
  lg9?: boolean;
  lg10?: boolean;
  lg11?: boolean;
  lg12?: boolean;
}
