import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: Spectator<HelloComponent>;
  const createComponent = createComponentFactory(HelloComponent);

  it('should create', () => {
    component = createComponent();
    expect(component).toBeTruthy();
  });
});
