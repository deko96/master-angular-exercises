import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentResultsData } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.results());
}
