export type EventValue = string | number | boolean;

export interface IProduct {
  name: string;
  category: string;
  isImported: boolean;
  price: string;
}

export interface ICartProduct {
  name: string;
  category: string;
  isImported: boolean;
  price: string;
  cartPrice: string;
  appliedTax: string;
}

export interface IDropdpwnProps {
  label: string;
  value: string | number | null;
  master: IProduct[];
  handleSelect: (value: React.FormEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}
