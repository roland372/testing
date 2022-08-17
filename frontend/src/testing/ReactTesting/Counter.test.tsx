import Counter from './Counter';
import { getByRole, render, screen, fireEvent } from '@testing-library/react';

describe('Counter', () => {
	it('counter displays correct initial count', () => {
		render(<Counter initialCount={0} />);
		const countValue = Number(screen.getByTestId('count').textContent);

		expect(countValue).toEqual(0);
	});

	it('count should increment by 1 if increment button is clicked', () => {
		render(<Counter initialCount={0} />);

		const incrementBtn = screen.getByRole('button', { name: 'Increment' });
		const countValue1 = Number(screen.getByTestId('count').textContent);

		expect(countValue1).toEqual(0);
		fireEvent.click(incrementBtn);

		const countValue2 = Number(screen.getByTestId('count').textContent);

		expect(countValue2).toEqual(1);
	});

	it('count should decrement by 1 if the decrement button is clicked', () => {
		render(<Counter initialCount={0} />);

		const decrementBttn = screen.getByRole('button', { name: 'Decrement' });

		expect(Number(screen.getByTestId('count').textContent)).toEqual(0);

		fireEvent.click(decrementBttn);

		expect(Number(screen.getByTestId('count').textContent)).toEqual(-1);
	});

	it('count should be 0 if the restart button is clicked', () => {
		render(<Counter initialCount={50} />);

		const restartBttn = screen.getByRole('button', { name: 'Restart' });

		expect(Number(screen.getByTestId('count').textContent)).toEqual(50);

		fireEvent.click(restartBttn);

		expect(Number(screen.getByTestId('count').textContent)).toEqual(0);
	});

	it('count should invert signs if the switch signs button is clicked', () => {
		render(<Counter initialCount={50} />);

		const switchBttn = screen.getByRole('button', { name: 'Switch Signs' });

		expect(Number(screen.getByTestId('count').textContent)).toEqual(50);

		fireEvent.click(switchBttn);
		
		expect(Number(screen.getByTestId('count').textContent)).toEqual(-50);
	});
});
