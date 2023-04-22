import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent, ThingComponent } from '@nx-ng-storybook/shared/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, ThingComponent],
  selector: 'nx-ng-storybook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-app';
}
