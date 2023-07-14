import "./App.css";
import React from "react";
import { Listing } from "./components/Listing";
import { Stars } from "./components/Stars";

export enum currency {
  USD = "$",
  EUR = "€",
  GBP = "GBP",
}

export interface ProductTypes {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: "USD" | "EUR" | "GBP";
  price: string;
  quantity: number;
}
export interface MainImage {
  url_570xN: string;
}

function App() {
  const [dummyData, setDummyData] = React.useState<ProductTypes[]>([]);

  React.useEffect(() => {
    fetch("./etsy.json")
      .then((response) => {
        response
          .json()
          .then((data: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setDummyData(data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    console.log(dummyData);
  }, [dummyData]);
  const count = 3;
  return (
    <>
      <Listing items={dummyData} />
      {count >= 1 && count <= 5 && typeof count === "number" ? (
        <Stars count={count} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
