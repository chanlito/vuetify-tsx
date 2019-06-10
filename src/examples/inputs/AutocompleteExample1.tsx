import { VAutocomplete } from '@/components';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const AutocompleteExample1 = component({
  data: () => ({
    selected: null as any,
    items: [
      { id: 1, name: 'Test-1' },
      { id: 2, name: 'Test-2' },
      { id: 3, name: 'Test-3' },
    ],
  }),
  render() {
    return (
      <div>
        <SubTitle>Autocomplete</SubTitle>
        <VAutocomplete
          v-model={this.selected}
          items={this.items}
          item-text="name"
          // item-text={(value: any): string => value.name}
          return-object
          label="Tests"
          clearable
        />
        <span>
          Selected ID:{' '}
          {this.selected !== null ? this.selected.id : 'Nothing selected'}
        </span>
      </div>
    );
  },
});

export default AutocompleteExample1;
