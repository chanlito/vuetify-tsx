import { component } from 'vue-tsx-support';
import VLayout from '@/components/VLayout';
import VFlex from '@/components/VFlex';
import VCard from '@/components/VCard';
import VImg from '@/components/VImg';
import VCardTitle from '@/components/VCardTitle';
import VCardActions from '@/components/VCardActions';
import VBtn from '@/components/VBtn';
import VContainer from '@/components/VContainer';
import VCardText from '@/components/VCardText';
import VSpacer from '@/components/VSpacer';

const Cards = component({
  name: 'Cards',
  data: () => ({
    cardText:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
  }),
  render() {
    return (
      <div>
        <h2 class="display-1 mb-3 font-weight-bold">Cards</h2>
        <VContainer class="pa-0" grid-list-lg>
          <VLayout>
            {/* Card 1 */}
            <VFlex>
              <VCard>
                <VImg
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  aspect-ratio="2.75"
                />
                <VCardTitle primary-title>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                </VCardTitle>
                <VCardText>{this.cardText}</VCardText>
                <VCardActions>
                  <VBtn text>Share</VBtn>
                  <VBtn text color="orange">
                    Explore
                  </VBtn>
                </VCardActions>
              </VCard>
            </VFlex>
            {/* Card 2 */}
            <VFlex>
              <VCard>
                <VCardTitle primary-title>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                </VCardTitle>
                <VImg
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  aspect-ratio="2.75"
                />
                <VCardText>{this.cardText}</VCardText>
                <VCardActions>
                  <VSpacer />
                  <VBtn text>Share</VBtn>
                  <VBtn text color="orange">
                    Explore
                  </VBtn>
                </VCardActions>
              </VCard>
            </VFlex>
          </VLayout>
        </VContainer>
      </div>
    );
  },
});

export default Cards;
