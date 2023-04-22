import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-ng-storybook-thing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
})
export class ThingComponent {}
