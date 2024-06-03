import { useEffect, useState } from "react";
import { IItem } from "../../models/Item-type";
import { getItems } from "../../services/item.service";
import { useSearchParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
function Items() {
  const [items, setItems] = useState<IItem[]>([]);
  const [searchParams] = useSearchParams();
  const { handleChangeBreadcrumbs } = useBreadcrumbContext();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchItems = async () => {
      if (search !== null) {
        const itemsResponse = await getItems(search);
        handleChangeBreadcrumbs(
          itemsResponse.categories.map(({ id, name }) => ({
            label: name,
            link: id,
          }))
        );
        setItems(itemsResponse.items);
      }
    };
    fetchItems();
  }, [search]);

  return (
    <div
      className="results"
      style={{
        display: "grid",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {search ? (
        <section>
          <article>
            {items.map((item: IItem) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </article>
        </section>
      ) : (
        <div>No se encontraron productos</div>
      )}
    </div>
  );
}

export default Items;
