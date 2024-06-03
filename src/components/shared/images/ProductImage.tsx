import { ProductImageProps } from "./ProductImage-types";
import "./ProductImage.scss";

export const ProductImage = ({ image, altImage, type }: ProductImageProps) => {
  return (
    <img
      className={`product-image product-image-${type} `}
      src={image}
      alt={altImage}
    />
  );
};
