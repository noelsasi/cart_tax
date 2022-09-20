import { ICartProduct } from "../types";

type Tprops = {
  cart: ICartProduct[];
  handleRemove: (name: string) => void;
  calculateTotal: any;
};

export const CartComponent = ({
  cart,
  handleRemove,
  calculateTotal,
}: Tprops): JSX.Element => {
  const { total, taxTotal } = calculateTotal() || {};
  const finalCartPrice = (item: ICartProduct) =>
    parseFloat(item.appliedTax) + parseFloat(item.price);

  return (
    <div className="card mt-10">
      <h3>Cart Items</h3>

      {cart.length > 0 && (
        <table className="mt-2 text-sm text-left text-gray-500  shadow-md ">
          <thead className="text-xs text-white uppercase bg-gray-500 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Items
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Tax included
              </th>
              <th scope="col" className="py-3 px-6">
                Final Price
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: ICartProduct, index: number) => (
              <tr key={index} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">{item.price}</td>
                <td className="py-4 px-6">{item.appliedTax}</td>
                <td className="py-4 px-6">{finalCartPrice(item).toFixed(2)}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleRemove(item.name)}
                    type="button"
                    className="bg-red-400 px-2 py-1 text-white rounded-xl"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <>
          <div className="w-4/6 p-2 ml-4 mt-4 bg-white items-center grid grid-cols-2">
            <p className="text-black">Sales Taxes:</p>
            <span> Rs. {taxTotal || 0} </span>
          </div>
          <div className="w-4/6 p-2 ml-4 mb-4 bg-white items-center grid grid-cols-2">
            <p className="text-black">Total:</p>
            <span> Rs. {total || 0} </span>
          </div>
        </>
      )}
    </div>
  );
};
