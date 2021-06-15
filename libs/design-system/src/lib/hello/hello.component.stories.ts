import { text } from '@storybook/addon-knobs';

import { HelloComponent } from './hello.component';

export default {
  title: 'HelloComponent',
  component: HelloComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  props: {
    message: text('message', 'Hey you!'),
  },
});
