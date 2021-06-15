import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [HttpClientTestingModule],
  });

  it('should create the app', () => {
    app = createComponent();
    expect(app).toBeTruthy();
  });
});
