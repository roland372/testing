import React from 'react';
import Header from './Header';

const TypeScript = () => {
	//? Basic Types
	// let n = 5; // automatically assigns type
	// let n: number = 5;
	// n = '5'; // can't assign number to string

	// let name: string = 'Name';
	// let isTrue: boolean = true;
	// let x: any = 'Hello';

	// x = true; // any allows us to reassign even though type doesn't match

	// let age: number;
	// age = 30;

	//? Array
	// let ids: number[] = [1, 2, 3, 4, 5]; // array that only contains numbers

	// ids.push('hello'); // throws an error, we can't add string to array of numbers

	// let arr: any[] = [1, true, 'test'];

	//? Tuple - allows us to specify multiple types inside array
	// let person: [number, string, boolean] = [1, 'test', true];

	// let employee: [number, string][] = [
	// 	[1, 'test'],
	// 	[2, 'test2'],
	// ];

	//? Union - allows variable to have multiple types
	// let id: string | number = 22;
	// id = 'test';

	//? Enum - by default have values starting from 0 and will increment by 1
	// enum Direction1 {
	// 	Up,
	// 	Down,
	// 	Left,
	// 	Right,
	// }

	// enum Direction2 {
	// 	Up = 5,
	// 	Down, // 6
	// 	Left, // 7
	// 	Right, // 8
	// }

	// console.log(Direction1.Left); // 2

	//? Objects
	// const user: {
	// 	id: number;
	// 	name: string;
	// } = {
	// 	id: 1,
	// 	name: 'Name',
	// };

	//* another way of spcifying object types
	// type User = {
	// 	id: number;
	// 	name: string;
	// };

	// const user: User = {
	// 	id: 1,
	// 	name: 'Name',
	// };

	//? Type assertion
	// let id2: any = 1;
	// let customerId = id2 as number; // after reasigning variable we can set it's type using "as"

	//? Functions
	// function addNum(x: type, y: type): return type
	// function addNum(x: number, y: number): number {
	// return x + y;
	// }

	// log function has no return so we set return type as void
	// function log(message: string | number): void {
	// console.log(message);
	// }

	//? Interfaces - custom types similar to "type"
	// interface UserInterface {
	// 	readonly id: number; // mark property that cannot be reassigned
	// 	name: string;
	// 	age?: number; // optional property
	// }

	// const user1: UserInterface = {
	// 	id: 1,
	// 	name: 'Name',
	// age is missing, but doesn't throw an error
	// };

	// user1.id = 5; // can't reassign, it's read only

	// type Point = number | string;
	// const p1: Point = 1;

	// interface Point2 = number | string; // we can't use unions with interfaces
	// const p2: Point2 = 2;

	//* interface with function
	// interface MathFunc {
	// 	(x: number, y: number): number;
	// }

	// const add: MathFunc = (x: number, y: number): number => {
	// 	return x + y;
	// };

	// const sub: MathFunc = (x: number, y: number): number => x - y;

	//? Generics
	// function getArray<T>(items: T[]): T[] {
	// 	return new Array().concat(items);
	// }

	// let numArray = getArray<number>([1, 2, 3, 4]);
	// let strArray = getArray<string>(['a', 'b', 'c']);

	// numArray.push(5);

	return <Header title='TypeScript' color='red' />;
};

export default TypeScript;
