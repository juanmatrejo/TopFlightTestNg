import { Component } from '@angular/core';

@Component({
	selector: 'app-sum-evens-odds',
	templateUrl: './sum-evens-odds.component.html',
	styles: ``
})
export class SumEvensOddsComponent {

	evensOdds: number[][] = [[1],
	[1, 2],
	[1, 2, 3],
	[1, 2, 3, 4],
	[3, 3, 4, 4],
	[3, 2, 3, 4],
	[4, 1, 2, 3],
	[1, 1],
	[]];

	result: number[] = [];

	constructor() {

		for (let idx = 0; idx < this.evensOdds.length; idx++) {

			this.result.push(this.sumEvensOdds(this.evensOdds[idx]));
		}
	}

	sumEvensOdds(input: number[]): number {

		const odds: number = input.filter(x => (x % 2) != 0).reduce((sum, current) => sum + current, 0);
		const evens: number = input.filter(x => (x % 2) === 0).reduce((sum, current) => sum + current, 0);

		return odds - evens;
	}
}
