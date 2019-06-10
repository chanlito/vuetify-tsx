import VTimeline from '@/components/VTimeline';
import VTimelineItem from '@/components/VTimelineItem';
import { Component } from 'vue-property-decorator';
import { Component as TsxComponent } from 'vue-tsx-support';

interface Props {}

@Component
export default class Timelines extends TsxComponent<Props> {
  years: number[] = [2017, 2018, 2019, 2020];

  render() {
    return (
      <VTimeline dense={this.$vuetify.breakpoint.xsOnly}>
        {this.years.map(year => (
          <VTimelineItem
            key={year}
            small
            color={year % 2 ? 'primary' : 'success'}
          >
            <div slot="opposite">
              <h3 class="headline mb-3">{year}</h3>
            </div>
            <div>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </VTimelineItem>
        ))}
      </VTimeline>
    );
  }
}
