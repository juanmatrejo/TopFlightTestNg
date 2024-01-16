import { Component } from '@angular/core';

@Component({
	selector: 'app-reversed-value',
	templateUrl: './reversed-value.component.html',
	styles: ``
})
export class ReversedValueComponent {

	values: number[] = [
		1234,
		12005,
		1,
		1000,
		0,
		-12345
	];

	result: number[] = [];

	constructor() {

		for (let idx = 0; idx < this.values.length; idx++) {

			this.result.push(this.reverseValue(this.values[idx]));
		}
	}

	reverseValue(input: number): number {

		let isNegative: boolean = false;
		if (input < 0) {

			isNegative = true;
			input = input * -1;
		}

		let value: string = input.toString();
		let result: string = '';

		for (let idx = value.length - 1; idx >= 0; idx--) {

			result = result + value[idx];
		}

		if (isNegative) {

			return parseInt(result) * -1;
		}
		else {

			return parseInt(result);
		}
	}
}
