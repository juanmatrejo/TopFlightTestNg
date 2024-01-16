import { Component } from '@angular/core';

@Component({
	selector: 'app-from0to20',
	templateUrl: './from0to20.component.html',
	styles: ``
})
export class From0to20Component {

	value: number;
	incrementActive!: boolean;
	decrementActive!: boolean;
	resetActive!: boolean;

	constructor() {

		this.value = 0;
		this.setButtons();
	}

	increment(): void {

		if (this.value < 20) {

			this.value++;
			this.setButtons();
		}
	}

	decrement(): void {

		if (this.value > 0) {

			this.value--;
			this.setButtons();
		}
	}

	reset(): void {

		this.value = 0;
		this.setButtons();
	}

	setButtons(): void {

		if (this.value == 0) {

			this.incrementActive = true;
			this.decrementActive = false;
			this.resetActive = false;

			return;
		}

		if (this.value == 20) {

			this.incrementActive = false;
			this.decrementActive = true;
			this.resetActive = true;

			return;
		}

		this.incrementActive = true;
		this.decrementActive = true;
		this.resetActive = true;
	}
}
