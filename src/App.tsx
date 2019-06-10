import { component } from 'vue-tsx-support';
import AlertExample1 from './examples/alerts/AlertExample1';
import AvatarExample1 from './examples/avatars/AvatarExample1';
import BadgeExample1 from './examples/badges/BadgeExample1';
import BreadcrumbExample1 from './examples/breadcrumbs/BreadcrumbExample1';
import ButtonExample1 from './examples/buttons/ButtonExample1';
import ButtonToggleExample1 from './examples/buttons/ButtonToggleExample1';
import CardExample1 from './examples/cards/CardExample1';
import AutocompleteExample1 from './examples/inputs/AutocompleteExample1';
import AutocompleteExample2 from './examples/inputs/AutocompleteExample2';
import Title from './examples/Title';
import { VApp, VContainer, VContent, VFlex, VLayout } from './index';

const App = component({
  name: 'App',
  render() {
    return (
      <VApp>
        <VContent>
          <VContainer>
            <VLayout justify-center>
              <Title>Vuetify TSX Components</Title>
            </VLayout>
            <VLayout>
              <VFlex>
                <AutocompleteExample1 />
                <AutocompleteExample2 />
                <AlertExample1 />
                <AvatarExample1 />
                <BadgeExample1 />
                <BreadcrumbExample1 />
                <ButtonExample1 />
                <ButtonToggleExample1 />
                <CardExample1 />
              </VFlex>
            </VLayout>
          </VContainer>
        </VContent>
      </VApp>
    );
  },
});

export default App;
