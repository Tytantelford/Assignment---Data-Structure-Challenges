//1
let objectHarryPotter = {
  id: 100,
  name: "Harry Potter",
  age: 15,
  dob: "July",
  grades: [1, 2, 3, 4, 5],
  "delete me": "delete me",

  education: {
    school: "Hogwarts",
    country: "Scotland",

    parents: {
      dad: "James",
      mom: "Lily",
    },
  },
};

console.log(objectHarryPotter instanceof Object);

//2
let Tytan = {
  firstName: "Tytan",
  lastName: "Telford",
  city: "Mapleton",

  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};
console.log(Tytan);

//3
class Array {
  constructor(numbers) {
    this.numbers = numbers;
    this.start = 0;
    this.end = numbers.length - 1;
    this.removeFromFront = true;
  }

  addNumber() {
    if (this.start > this.end) return "";

    let currentNumber;
    if (this.removeFromFront) {
      currentNumber = this.numbers[this.start];
      this.start++;
    } else {
      currentNumber = this.numbers[this.end];
      this.end--;
    }
    this.removeFromFront = !this.removeFromFront;
    return currentNumber;
  }
}

const list = new Array([1, 2, 3, 4, 5]);

console.log(list.addNumber());
console.log(list.addNumber());
console.log(list.addNumber());
console.log(list.addNumber());
console.log(list.addNumber());
console.log(list.addNumber());
