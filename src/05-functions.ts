/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 */

function sum(x: number, y: number): number {
  const result = x + y;
  return result;
}

sum(1, 2);
sum(1, "2"); // буде помилка, бо передаємо другим аргументом рядок

// -------------------------------------------------------------------

// function makeMessage(word: string): void {
//   console.log(word);
// }

// makeMessage("Hello");

// export default function makeMessage(age: string | number): void {
//     console.log(`Your age is ${age}`);

// }

// makeMessage(20)

// ---------------------------------------------------------------------

function test(num: number): string {
  let value = "test";
  let result = value + num;
  return result;
}
const a = Number("6");
test(a);

// ----------------------------------------------------------------------

interface Student {
  studentName: string;
  course: string;
  time: number;
}

const students: Student[] = [
  {
    studentName: "Olha",
    course: "JS",
    time: 8,
  },
  {
    studentName: "Oleg",
    course: "React",
    time: 8,
  },
  {
    studentName: "Tetiana",
    course: "HTML/CSS",
    time: 3,
  },
];

function showCourses(studentsArr: Student[]): string[] {
  const coursesList = studentsArr.map((student) => student.course);
  return coursesList;
}

console.log(showCourses(students));

// напишемо функцію з опціональними параметрами
function makeMessage(username: string, login?: string): string {
  if (login !== undefined) {
    return `${username} has login ${login}`;
  } else {
    return `${username}`;
  }
}

makeMessage("Oleg");
makeMessage("Oleg", "test");
makeMessage("Tetiana", undefined);

// -------------------------------------------------------
interface Product {
  title: string;
  price: number;
  isFavorite: boolean;
}

interface Basket {
  owner: string;
  products: Product[];
  showOwner: (x: number) => string;
  addProduct: (product: Product) => void;
}

// типізація методів обʼєктів
const basket: Basket = {
  owner: "Oleg",
  products: [],
  showOwner(x) {
    return `The owner of basket is ${this.owner} and has ${x} products`;
  },
  addProduct(product) {
    this.products.push(product);
  },
};

basket.showOwner(10);
let product: Product = {
  title: "lemon",
  price: 50,
  isFavorite: true,
};
basket.addProduct(product);
