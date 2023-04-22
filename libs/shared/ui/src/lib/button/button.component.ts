import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-ng-storybook-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {}
