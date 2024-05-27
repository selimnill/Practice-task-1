import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { FaEdit } from "react-icons/fa";

export default function DashboardHome() {
  const [user] = useAuthState(auth);
  const { displayName, accessToken, uid, photoURL, email } = user;
  console.log(user);

return (
  <>
    {user && <h3 className="mb-10 text-2xl">
      Welcome <span className="font-semibold"> {displayName} </span>to Dashboard
      Home
    </h3>}
    <div className="hero bg-base-200 p-6">
      <div className="hero-content flex-col lg:flex-row-reverse p-4">
        <div className="card w-full shadow-2xl min-h-100 bg-base-100 p-6">
          <div className="flex">
            <label className="label w-36">
              <span className="label-text">
                <b>Email: </b>
              </span>
            </label>
            <input
              className="input input-bordered rounded-none w-full"
              value={email}
              disabled
            />
          </div>
          <div className="flex">
            <label className="label w-36">
              <span className="label-text">
                <b>uID: </b>
              </span>
            </label>
            <input
              className="input input-bordered rounded-none w-full"
              value={uid}
              disabled
            />
          </div>
          <div className="flex">
            <label className="label w-36">
              <span className="label-text">
                <b>AccessToken: </b>
              </span>
            </label>
            <input
              className="input input-bordered rounded-none w-full"
              value={accessToken}
              disabled
            />
          </div>
          <div className="flex">
            <label className="label w-36">
              <span className="label-text">
                <b>PhotoURL: </b>
              </span>
            </label>
            <input
              className="input input-bordered rounded-none w-full"
              value={photoURL}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
}
