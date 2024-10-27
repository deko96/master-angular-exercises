import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  private authService = inject(AuthService);

  userType = input.required<Permission>({
    alias: 'appAuth',
  });

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
      } else {
        console.log('DO NOT SHOW ELEMENT');
      }
    });
  }
}
