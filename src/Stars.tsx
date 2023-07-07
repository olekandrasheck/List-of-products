import { Star } from "./Star";

export const Stars: React.FC<{ count: number }> = ({ count }) => {
  const arrStars = Array(count).fill("");
  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        <li className="star-li">
          {arrStars.map((item, index) => (
            <Star key={index} />
          ))}
        </li>
      </ul>
    </div>
  );
};
