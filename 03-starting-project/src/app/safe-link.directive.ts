import {
  Directive,
  ElementRef,
  inject,
  Injectable,
  input,
} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {
    alias: 'appSafeLink',
  });

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const el = this.hostElementRef.nativeElement;
      const address = el.href;
      el.href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
