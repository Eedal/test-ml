import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem, ItemModelEmpty } from "../../models/Item-type";
import { getItem } from "../../services/item.service";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import shippingImg from "../../styles/foundation/images/ic_shipping.png";
import "./ItemDetail.scss";
import { ProductImageTypes } from "../../components/shared/images/ProductImage-types";
import { ProductImage } from "../../components/shared/images/ProductImage";
import { Button } from "../../components/shared/Button/Button";
import { getPriceCurrency } from "../../utils/formattCurrency";

function Item() {
  const [item, setItem] = useState<IItem>(ItemModelEmpty);
  const { id } = useParams();
  const { handleChangeBreadcrumbs } = useBreadcrumbContext();

  useEffect(() => {
    const fetchItems = async () => {
      if (id) {
        const itemsResponse = await getItem(id);
        if (itemsResponse.item.categories) {
          handleChangeBreadcrumbs(
            itemsResponse.item.categories.map(({ id, name }) => ({
              label: name,
              link: id,
            }))
          );
        }
        setItem(itemsResponse.item);
      }
    };
    fetchItems();
  }, [id]);

  if (!id) return null;

  const {
    picture,
    title,
    condition,
    sold_quantity,
    price,
    description,
    free_shipping,
  } = item;

  return (
    <div className="product-detail">
      <section className="product-info">
        <p className="info">
          {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos
        </p>
        <h1 className="title">{title}</h1>
        <section className="price">
          {`$ `}
          {price &&
            price.currency &&
            price.amount &&
            getPriceCurrency(price.amount)}
          {free_shipping ? (
            <img
              className="img-free-shipping"
              src={shippingImg}
              alt="free-shipping-icon"
            />
          ) : (
            ""
          )}
        </section>
        <Button
          text="Comprar"
          onClick={() => console.log("Proceso de compra")}
        />
      </section>
      <section className="product-image">
        <ProductImage
          image={picture}
          altImage={title}
          type={ProductImageTypes.ProductDetails}
        />
      </section>
      <section className="description-section">
        <h2 className="description-title">Descripción del producto</h2>
        <p className="description">
          {description != "" ? description : "Sin descripción"}
        </p>
      </section>
    </div>
  );
}

export default Item;
