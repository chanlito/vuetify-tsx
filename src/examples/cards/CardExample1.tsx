import { VBtn, VCard, VCardActions, VCardTitle, VImg } from '@/index';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const CardExample1 = component({
  data: () => ({
    cardText:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
  }),
  render() {
    return (
      <div>
        <SubTitle>Card</SubTitle>
        <VCard>
          <VImg
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          />

          <VCardTitle primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div> {this.cardText} </div>
            </div>
          </VCardTitle>

          <VCardActions>
            <VBtn flat color="orange">
              Share
            </VBtn>
            <VBtn flat color="orange">
              Explore
            </VBtn>
          </VCardActions>
        </VCard>
      </div>
    );
  },
});

export default CardExample1;
