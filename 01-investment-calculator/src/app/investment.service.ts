import { Injectable, signal } from '@angular/core';
import { UserInputData } from './user-input/user-input.model';
import { InvestmentResultsData } from './investment-results/investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  results = signal<InvestmentResultsData[]>([]);

  calculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: UserInputData) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.results.set(annualData);
  }
}
