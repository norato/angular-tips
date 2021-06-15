import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [HttpClientModule],
  },
  props: {},
});
