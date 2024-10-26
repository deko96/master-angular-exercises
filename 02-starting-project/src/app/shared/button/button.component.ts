import { Component } from '@angular/core';

@Component({
  // selector: '.button', -> component as a class selector
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
