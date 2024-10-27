import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ServerStatusType } from './server-status.model';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<ServerStatusType>('unknown');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      console.log('Effect functions', this.currentStatus());
      onCleanup(() => {
        console.log('Effect cleanup');
      });
    });
  }

  ngOnInit(): void {
    console.log('ON INIT!');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
