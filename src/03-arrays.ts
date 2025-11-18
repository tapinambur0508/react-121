/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

const products: string[] = ["cherry", "lemon", "apple"]; // const products: Array<string> = ["cherry", "lemon", "apple"];

const PRODUCTS = products.map((value) => value.toUpperCase());

interface Product {
  title: string;
  price: number;
  isFavorite: boolean;
}

const productsBasket: Product[] = [
  {
    title: "lemon",
    price: 100,
    isFavorite: true,
  },
  {
    title: "apple",
    price: 10,
    isFavorite: false,
  },
  {
    title: "cherry",
    price: 200,
    isFavorite: true,
  },
  {
    title: "avocado",
    price: 80,
    isFavorite: true,
  },
];

const titles = productsBasket.map((product) => product.title);
