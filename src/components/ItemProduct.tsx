import { ProductTypes, currency } from "../App";

export const ItemProduct: React.FC<{ item: ProductTypes }> = ({ item }) => {
  const level = (rate: number) => {
    if (rate <= 10) {
      return "level-low";
    }
    if (rate <= 20) {
      return "level-medium";
    }
    return "level-high";
  };
  return (
    <div>
      <li key={item.listing_id}>
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title?.length >= 50
                ? `${item.title.slice(0, 50)}…`
                : item.title}
            </p>
            <p className="item-price">
              <span>{item?.currency_code && currency[item.currency_code]}</span>
              {item.price}
            </p>
            {}
            <p className={`item-quantity ${level(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};
