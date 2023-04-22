import { Meta } from '@storybook/angular';
import { ThingComponent } from './thing.component';

export default {
  title: 'ThingComponent',
  component: ThingComponent,
} as Meta<ThingComponent>;

export const Primary = {
  render: (args: ThingComponent) => ({
    props: args,
  }),
  args: {},
};
