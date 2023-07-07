import { IDummy } from "./App";
import { ItemProduct } from "./ItemProduct";

export const Listing: React.FC<{ items: IDummy[] }> = ({ items }) => {
  return (
    <div>
      <div className="item-list">
        {items?.map((item: IDummy) => (
          <ItemProduct item={item} />
        ))}
      </div>
    </div>
  );
};
