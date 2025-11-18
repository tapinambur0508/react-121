/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

const product: {
  title: string;
  price: number;
  isFavorite: boolean;
  duedate?: number;
} = {
  title: "lemon",
  price: 50,
  isFavorite: true,
};

interface Student {
  studentName: string;
  readonly course: string;
  time: number;
  isFavorite: boolean;
  age?: number;
}

const student1: Student = {
  isFavorite: true,
  course: "React",
  age: 30,
  studentName: "Oleg",
  time: 10,
};

const student2: Student = {
  studentName: "Olha",
  course: "JS",
  time: 20,
  isFavorite: true,
};

student1.course = "Node.js";

if (student1.age !== undefined) {
  const result = student1.age + 10;
}
