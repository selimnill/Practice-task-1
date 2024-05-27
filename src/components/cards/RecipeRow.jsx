import { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {

  const [deleteRecipe, setDelete] = useState([])

  const handleDeleteRecipe = (id) => {
    const isConfirmed = window.confirm("Are you sure to delete this Recipe?");
    if (isConfirmed) toast.success("Product Deleted.!");
    const remaining = recipe.filter(recipe?.id !== id);
    console.log(remaining);
  };
console.log(recipe)
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit <FaEdit />
        </Link>
        <button
          onClick={() => handleDeleteRecipe(recipe?.id)}
          className="btn btn-xs bg-red-500 text-white"
        >
          Delete <MdDelete />
        </button>
      </td>
    </tr>
  );
}
