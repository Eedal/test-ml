import { Link } from "react-router-dom";

import { IItem } from "../../models/Item-type";
import freeShippingImg from "../../styles/foundation/images/ic_shipping.png";
import "./ItemCard.scss";
import { ProductImage } from "../shared/images/ProductImage";
import { ProductImageTypes } from "../shared/images/ProductImage-types";
import { getPriceCurrency } from "../../utils/formattCurrency";

function ItemCard(item: IItem) {
  return (
    <Link to={`/items/${item.id}`} className="item-card">
      <section className="image-section">
        <ProductImage
          altImage={item.title}
          image={item.picture}
          type={ProductImageTypes.CardResult}
        />
      </section>
      <section className="price-shipping">
        {`$ ${getPriceCurrency(item.price.amount)}`}
        {item.free_shipping && (
          <img
            className="img-free-shipping"
            src={freeShippingImg}
            alt="free-shipping-img"
          />
        )}
      </section>
      <div className="title">{item.title}</div>
      <div className="state">{item.seller}</div>
    </Link>
  );
}

export default ItemCard;
