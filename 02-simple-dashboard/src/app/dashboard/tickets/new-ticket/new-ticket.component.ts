import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<Pick<Ticket, 'title' | 'request'>>();

  // @ViewChildren('input') private inputs?: ElementRef<HTMLInputElement>[];
  // private inputs = viewChildren<HTMLInputElement | HTMLTextAreaElement>(
  //   'input'
  // );

  onSubmit(title: string, request: string) {
    console.log('Submitted', title, request);
    this.add.emit({ title, request });
    this.form().nativeElement.reset();
  }
}
