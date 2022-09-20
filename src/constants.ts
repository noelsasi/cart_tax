import { IProduct } from "./types";

export const Products: IProduct[] = [
  {
    name: "Book",
    category: "books",
    isImported: false,
    price: "12.49",
  },
  {
    name: "Music CD",
    category: "entertainment",
    isImported: false,
    price: "14.99",
  },
  {
    name: "Choclate bar",
    category: "food",
    isImported: false,
    price: "0.85",
  },
  {
    name: "imported box of chocolates at 10.00",
    category: "food",
    isImported: true,
    price: "10.00",
  },
  {
    name: "imported bottle of perfume at 47.50",
    category: "fashion",
    isImported: true,
    price: "47.50",
  },
  {
    name: "imported bottle of perfume at 27.99",
    category: "fashion",
    isImported: true,
    price: "27.99",
  },
  {
    name: "bottle of perfume",
    category: "fashion",
    isImported: false,
    price: "18.99",
  },
  {
    name: "packet of headache pills",
    category: "health",
    isImported: false,
    price: "9.75",
  },
  {
    name: "imported box of chocolates at 11.25",
    category: "food",
    isImported: true,
    price: "11.25",
  },
];
