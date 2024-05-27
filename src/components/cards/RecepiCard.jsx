/* eslint-disable react/prop-types */
import pizza from "../../assets/pizza.webp";
import { FaCartArrowDown } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

export default function RecepiCard({ recipe }) {
  return (
    <div className="card  bg-base-100 shadow-xl border border-red-200">
      <figure>
        <img src={pizza} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe?.title}</h2>
        <div className="card-actions justify-between items-center">
        <h2 className="card-title">$ {recipe?.price}</h2>
          <div className="badge badge-outline rounded bg-red-200 border border-red-200 ">{recipe?.category}</div>
        </div>
        <p>
          {recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description}
        </p>
        <div className="flex justify-center gap-10 cursor-pointer">
        <TbJewishStarFilled  className="text-red-800" size={25} title="Add to wishlist"/>
        <FaCartArrowDown  className="text-red-800" size={25} title="Add to cart"/>
        </div>
      </div>
    </div>
  );
}
