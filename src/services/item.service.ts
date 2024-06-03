import HttpService from "../lib/fetch";
import { IItem, ItemResponse, SearchResult } from "../models/Item-type";

const authorName = "Elkin";
const authorLastName = "de Armas";
export const getItems = async (query: string): Promise<SearchResult> => {
  const { data: search } = await HttpService.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
  );
  console.log("search:", search);

  const { data: categories } = await HttpService.get(
    `https://api.mercadolibre.com/categories/${search.results[0].category_id}`
  );
  console.log("categories:", categories);
  const categoriesBreadcrumbs: { id: string; name: string }[] =
    categories.path_from_root.map(
      ({ id, name }: { id: string; name: string }) => ({ name, id })
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: IItem[] = search.results.map((el: any) => ({
    id: el.id,
    title: el.title,
    price: {
      currency: el.currency_id,
      amount: el.price,
    },
    picture: el.thumbnail,
    condition: el.condition,
    free_shipping: el.shipping.free_shipping,
    seller: el.seller.nickname,
  }));
  const searchResult: SearchResult = {
    author: {
      name: authorName,
      lastname: authorLastName,
    },
    categories: categoriesBreadcrumbs,
    items,
  };

  return searchResult;
};

export const getItem = async (id: string): Promise<ItemResponse> => {
  const { data: product } = await HttpService.get(
    `https://api.mercadolibre.com/items/${id}`
  );
  const { data: description } = await HttpService.get(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  const { data: categories } = await HttpService.get(
    `https://api.mercadolibre.com/categories/${product.category_id}`
  );
  const categoriesBreadcrumbs: { id: string; name: string }[] =
    categories.path_from_root.map(
      ({ id, name }: { id: string; name: string }) => ({ name, id })
    );
  const item: ItemResponse = {
    author: {
      name: authorName,
      lastname: authorLastName,
    },
    item: {
      id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
      },
      picture: product.pictures[0].url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description: description.plain_text,
      categories: categoriesBreadcrumbs,
      state: product.seller_address.state.name,
    },
  };
  return item;
};
