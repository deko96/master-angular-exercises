import { Directive, Injectable, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {
    alias: 'appSafeLink',
  });

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const el = event.target as HTMLAnchorElement;
      const address = el.href;
      el.href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
