import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-tips-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  @Input() message = 'Hey you!';
}
