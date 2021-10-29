// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 12;

let userName: string = "Max";

let isInstructor: boolean = true;

// More complex types

let hobbies: string[] = ["It", "Sports"];

// Type alias

type Person = { name: string; age: number };

let person: Person;

person = { name: "Oskar", age: 29 };

let people: Person[];

people = [
  { name: "Oskar", age: 29 },
  { name: "Max", age: 32 },
];

// Type inference - Type is inferred from the first assignment

let course1 = "React - The Complete Guide";

// Union types - Multiple types
let courseId: string | number = "2";

courseId = 2;

// Functions & types

function sum(a: number, b: number) {
  return a + b;
}

function outpurAnything(a: any): void {
  console.log(a);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

let demoArray2 = ["Gillat", "It"];

let updatedArray2 = insertAtBeginning(demoArray2, "Oskar har alltid");

updatedArray2[0].split("");

let demoArray = [1, 2, 3, 4];

let updatedArray = insertAtBeginning(demoArray, -1);

updatedArray[0].split("");
