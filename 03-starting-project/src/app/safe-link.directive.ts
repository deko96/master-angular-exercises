import { Directive, Injectable } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active!');
  }
}
