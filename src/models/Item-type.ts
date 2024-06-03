export interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  categories?: { name: string; id: string }[];
  state: string;
  seller?: string;
}

export const ItemModelEmpty: IItem = {
  id: "",
  title: "",
  price: {
    currency: "",
    amount: 0,
  },
  picture: "",
  condition: "",
  free_shipping: false,
  state: "",
  seller: "",
};

export type ItemResponse = {
  author: Author;
  item: IItem;
};

export type SearchResult = {
  author: Author;
  categories: { name: string; id: string }[];
  items: IItem[];
};

export type Author = {
  name: string;
  lastname: string;
};
