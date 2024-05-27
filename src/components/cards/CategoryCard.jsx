/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <div className="border px-5 py-3 rounded-2xl hover:bg-red-500 hover:text-white cursor-pointer ">
      <h1 className="text-center font-semibold ">{category?.title}</h1>
    </div>
  );
}
