import "./index.css";
import { Products } from "./constants";
import { ICartProduct, IProduct } from "./types";
import React from "react";
import AppDropdown from "./components/AppDropdown";
import { CartComponent } from "./components/CartComponent";

export default function App() {
  const [cart, setCart] = React.useState<ICartProduct[]>([]);
  const [selected, setSelected] = React.useState<string>("default");
  const nonTaxCategory = ["books", "food", "health"];

  const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
    setSelected(e.currentTarget.value);
  };

  const handleAdd = () => {
    const product: IProduct | undefined = Products.find(
      (item) => item.name === selected
    );

    if (!product?.name) {
      return null;
    }

    let currentTax = 0,
      importTax = 0,
      taxPrice: number = parseFloat(product.price);

    //  books, food, and medical products are exempt from sales tax.
    const includeTax = !nonTaxCategory.includes(product?.category);

    //  Basic sales tax is applicable at a rate of 10% on all goods.
    const salesTax = 10;
    if (includeTax) {
      currentTax = (salesTax / 100) * parseFloat(product.price);
      taxPrice += parseFloat(currentTax.toFixed(2));
    }

    //  additional sales tax applicable on all imported goods at a rate of 5%,
    if (product.isImported) {
      const importedSalesTax = 5;
      importTax = (importedSalesTax / 100) * parseFloat(product.price);
      taxPrice += parseFloat(importTax.toFixed(2));
    }

    const totalTax =
      parseFloat(currentTax.toFixed(2)) + parseFloat(importTax.toFixed(2));

    //  The sales tax is rounded up to the nearest 0.05 amounts.
    const roundup = 0.05;
    const appliedTax = (Math.round(totalTax / roundup) * roundup).toFixed(2);
    const cartPrice = (Math.round(taxPrice / roundup) * roundup).toFixed(2);

    if (product?.name) {
      setCart((prev) => [
        ...prev,
        {
          ...product,
          cartPrice,
          appliedTax,
        },
      ]);
      setSelected("default");
    }
  };

  const handleRemove = (name: string) => {
    setCart((prev) => {
      return prev.filter((x) => x.name !== name);
    });
  };

  const calculateTotal = () => {
    if (cart.length === 0) {
      return null;
    }

    const total = cart.reduce(
      (accumulator, current) => accumulator + parseFloat(current.cartPrice),
      0
    );

    const taxTotal = cart.reduce(
      (accumulator, current) => accumulator + parseFloat(current.appliedTax),
      0
    );

    return {
      taxTotal: taxTotal.toFixed(2),
      total: total.toFixed(2),
    };
  };

  return (
    <div
      className="mx-auto md:w-10/12 p-10 mt-10 border-2 rounded"
      style={{ minHeight: "90vh" }}
    >
      <h1 className="text-2xl">Shopping Cart</h1>
      <div className="flex mt-10 items-center">
        <AppDropdown
          label="Products"
          master={Products}
          value={selected}
          handleSelect={handleChange}
        />
        <button
          onClick={handleAdd}
          type="submit"
          className="ml-6 w-32 focus:outline-none bg-green-500 text-white bg-green hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Add to Cart
        </button>
      </div>
      <CartComponent
        cart={cart}
        handleRemove={handleRemove}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}
