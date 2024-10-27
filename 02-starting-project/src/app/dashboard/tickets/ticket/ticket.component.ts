import { Component, input, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);

  get id() {
    return this.ticket().id;
  }

  get title() {
    return this.ticket().title;
  }

  get request() {
    return this.ticket().request;
  }

  get showDetails() {
    return this.detailsVisible();
  }

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
