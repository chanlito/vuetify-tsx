import { VBreadcrumbs } from '@/index';
import { component } from 'vue-tsx-support';
import SubTitle from '../SubTitle';

const BreadcrumbExample1 = component({
  data: () => ({
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
  render() {
    return (
      <div>
        <SubTitle>Breadcrumbs</SubTitle>
        <VBreadcrumbs items={this.breadcrumbs} divider=">" />
        <VBreadcrumbs
          items={this.breadcrumbs}
          divider=">"
          scopedSlots={{
            item: (props: any) => [
              <a href={props.item.href}>{props.item.text}</a>,
            ],
          }}
        />
        {/** @deprecated 'default slot' is deprecated, use ':items and scoped slot "item"' instead */}
        {/* <VBreadcrumbs>
         <VBreadcrumbsItem>WTF</VBreadcrumbsItem>
         <VBreadcrumbsItem>WTF 2</VBreadcrumbsItem>
         <VBreadcrumbsItem>WTF 3</VBreadcrumbsItem>
       </VBreadcrumbs> */}
      </div>
    );
  },
});

export default BreadcrumbExample1;
