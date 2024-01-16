import { Component } from '@angular/core';

@Component({
	selector: 'app-centered-array',
	templateUrl: './centered-array.component.html',
	styles: ``
})
export class CenteredArrayComponent {

	centeredArray: number[][] = [[1, 2, 3, 4, 5],
	[3, 2, 1, 4, 5],
	[3, 2, 1, 4, 1],
	[1, 2, 3, 4],
	[],
	[10]];

	result: number[] = [];

	constructor() {

		for (let idx = 0; idx < this.centeredArray.length; idx++) {

			this.result.push(this.centerArray(this.centeredArray[idx]));
		}
	}

	centerArray(input: number[]): number {

		if (input.length == 0 ||
			(input.length % 2) == 0) {

			return 0;
		}

		if (input.length == 1) {

			return 1;
		}

		let middle: number = Math.floor(input.length / 2);
		let minor: number = input[middle];

		for (let idx = 0; idx < input.length; idx++) {

			if (middle != idx &&
				minor >= input[idx]) {

				return 0;
			}
		}

		return 1;
	}
}