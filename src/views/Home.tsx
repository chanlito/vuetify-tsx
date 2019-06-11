import VBtn from '@/components/VBtn';
import VCard from '@/components/VCard';
import VCardActions from '@/components/VCardActions';
import VCardText from '@/components/VCardText';
import VCardTitle from '@/components/VCardTitle';
import VFlex from '@/components/VFlex';
import VLayout from '@/components/VLayout';
import VSpacer from '@/components/VSpacer';
import { component } from 'vue-tsx-support';

export default component({
  name: 'Home',
  render() {
    return (
      <VLayout align-center justify-center>
        <VFlex>
          <VCard>
            <VCardTitle class="title">Vuetify TSX</VCardTitle>
            <VCardText>
              <p>
                Enim ex enim aute eiusmod fugiat laborum culpa deserunt Lorem
                esse culpa reprehenderit et. Aliqua mollit id nostrud fugiat.
                Pariatur pariatur nisi aliqua labore esse elit labore ipsum.
                Exercitation cillum esse tempor voluptate. Fugiat eu in occaecat
                dolor laboris officia. Laborum labore id cupidatat voluptate.
                Ipsum cupidatat nisi et ea velit nisi. Tempor fugiat veniam in
                eu ex. Pariatur cupidatat laborum ullamco id nostrud
                exercitation magna. Veniam deserunt officia cillum veniam magna
                laboris velit. Nulla in quis consequat veniam sit.
              </p>
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn text color="accent">
                Learn More
              </VBtn>
            </VCardActions>
          </VCard>
        </VFlex>
      </VLayout>
    );
  },
});
