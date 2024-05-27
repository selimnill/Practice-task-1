import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function DashbaordLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Dashboard Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-5 w-60 min-h-screen  flex flex-col justify-between bg-slate-600 text-white font-semibold">
          {/* Sidebar content here */}
          <div className="mt-5">
            <li  className="rounded font-semibold"> 
              <NavLink to={"/dashboard/manage-recipes"}>Mangae All Recipes</NavLink>
            </li>
            <li  className="rounded font-semibold mt-3">
              <NavLink to={"/dashboard/add-recipe"}>Add Recipe</NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
