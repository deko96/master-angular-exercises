import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ServerStatusType } from './server-status.model';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: ServerStatusType = 'unknown';

  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    console.log('ON INIT!');
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
