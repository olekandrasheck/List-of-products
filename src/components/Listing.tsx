import { ProductTypes } from "../App";
import { ItemProduct } from "./ItemProduct";

export const Listing: React.FC<{ items: ProductTypes[] }> = ({ items }) => {
  return (
    <div>
      <div className="item-list">
        {items?.map((item: ProductTypes) => (
          <ItemProduct item={item} />
        ))}
      </div>
    </div>
  );
};
