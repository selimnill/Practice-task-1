import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddRecipe = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    // confirmation alert
    const isConfirmed = window.confirm("Are you sure to update this Recipe.?")

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.post("http://localhost:3000/recipes", recipeData);
    if(isConfirmed){
      toast.success('Recipe Added.!')
    }
  };
  return (
    <div className="w-full px-16 bg-gradient-to-t from-cyan-500 to-slate-400 p-10 m-10">
      <h1 className="text-4xl mb-10 text-center font-mono">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="flex justify-between items-center">
          <div className="mb-4 ml-[-15px]">
            <input
              type="text"
              name="id"
              placeholder="Enter Id"
              className="w-[255px] mt-5  py-3 px-5 border input input-bordered input-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
               placeholder="Enter Title"
              className="w-[255px] py-3 px-5 border input input-bordered input-primary"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mb-4 ml-[-15px]">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-[255px] py-3 px-5 border input input-bordered input-primary max-w-xs"
            />
          </div>
          <div className="mb-4">
            <select
              name="category"
              value={'Category'}
              id=""
              className="w-[255px] py-3 px-5 border input input-bordered input-primary "
            >
              <option selected>Select Category</option>
              {categories?.map((category) => (
                <option key={category?.id} value={category?.title}>
                  {category?.title}
                </option>
                
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 ml-[-15px]">
          <textarea
          placeholder="Description"
            name="description"
            className="w-full py-3 px-5 border input input-bordered input-primary"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
            alert="sdkfsdjf sdfd"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
