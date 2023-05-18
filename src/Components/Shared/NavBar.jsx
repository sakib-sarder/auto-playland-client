import { Link, NavLink } from "react-router-dom";
import car from "../../assets/car.png";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  //Logout
  const hangleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="container z-50 mx-auto relative border-b-2">
      <div className="hidden  py-2 lg:flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={car} alt="logo" className="w-16" />{" "}
          <span className="text-3xl font-bold">AutoPlayland</span>
        </div>
        <div>
          <ul className="flex gap-4 font-semibold">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>All Toys</NavLink>
            </li>
            {user && (
              <li>
                <NavLink>My Toys</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink>Add a Toy</NavLink>
              </li>
            )}
            <li>
              <NavLink>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex gap-1 items-start">
              <button onClick={hangleLogOut} className="btn btn-primary">
                Logout
              </button>
              <img
                src={user?.photoURL}
                alt="profile photo"
                className="w-12 h-12 rounded-full border border-blue-600"
              />
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
      {/* Small Device  */}
      <div className="flex items-center justify-between lg:hidden px-3">
        <div className="flex items-center gap-1">
          <img src={car} alt="logo" className="w-16" />{" "}
          <span className="text-3xl font-bold">AutoPlayland</span>
        </div>
        <div onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <RxCross1 className="text-4xl" />
          ) : (
            <HiOutlineBars3CenterLeft className="text-5xl" />
          )}
        </div>
      </div>
      <div>
        {openMenu && (
          <div className="px-2 pt-3 bg-gray-100 absolute top-16 z-20 w-full lg:hidden">
            {user ? (
              <div className="flex flex-row-reverse items-center gap-3 border-b-2 pb-2">
                <img
                  src={user?.photoURL}
                  alt="profile photo"
                  className="w-12 h-12 rounded-full border border-blue-600"
                />
                <p className="text-2xl font-medium">Sakib Sarder</p>
              </div>
            ) : (
              <Link className="flex justify-end" to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
            <ul className="text-xl">
              <li className="py-3 border-b-2">
                <NavLink>Home</NavLink>
              </li>
              <li className="py-3 border-b-2">
                <NavLink>All Toys</NavLink>
              </li>
              {user && (
                <li className="py-3 border-b-2">
                  <NavLink>My Toys</NavLink>
                </li>
              )}
              {user && (
                <li className="py-3 border-b-2">
                  <NavLink>Add a Toy</NavLink>
                </li>
              )}
              <li className="py-3 border-b-2">
                <NavLink>Blog</NavLink>
              </li>
              {user && (
                <button onClick={hangleLogOut} className="btn btn-primary my-3">
                  Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
