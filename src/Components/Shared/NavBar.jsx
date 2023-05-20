import { Link, NavLink } from "react-router-dom";
import car from "../../assets/logo.png";
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
        <Link to="/" className="flex items-center gap-1">
          <img src={car} alt="logo" className="w-28" />
          <h1 className="text-2xl font-bold text-gradient">Auto Playland</h1>
        </Link>
        <div>
          <ul className="flex gap-4 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-toys"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/add-toy"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Add a Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex gap-1 items-start">
              <button onClick={hangleLogOut} className="btn btn-primary">
                Logout
              </button>
              <div
                className="tooltip tooltip-info tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user?.photoURL}
                  alt="profile photo"
                  className="w-12 h-12 rounded-full border border-blue-600"
                />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
      {/* Small Device  */}
      <div className="flex items-center justify-between lg:hidden py-2 px-3">
        <Link to="/" className="flex items-center gap-1">
          <img src={car} alt="logo" className="w-28" />
          <h1 className="text-2xl font-bold text-gradient">Auto Playland</h1>
        </Link>
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
          <div className="px-2 pt-3 bg-gray-100 absolute top-16 z-20 w-full rounded-b-md lg:hidden">
            {user ? (
              <div className="flex flex-row-reverse items-center gap-3 border-b-2 pb-2">
                <div
                  className="tooltip tooltip-info tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    src={user?.photoURL}
                    alt="profile photo"
                    className="w-12 h-12 rounded-full border border-blue-600"
                  />
                </div>
                <p className="text-2xl font-medium">{user.displayName}</p>
              </div>
            ) : (
              <Link className="flex justify-end" to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
            <ul className="text-xl">
              <li className="py-3 border-b-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3 border-b-2">
                <NavLink
                  to="/all-toys"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  All Toys
                </NavLink>
              </li>
              {user && (
                <li className="py-3 border-b-2">
                  <NavLink
                    to="/my-toys"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : ""
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
              )}
              {user && (
                <li className="py-3 border-b-2">
                  <NavLink
                    to="/add-toy"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : ""
                    }
                  >
                    Add a Toy
                  </NavLink>
                </li>
              )}
              <li className="py-3 border-b-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }
                >
                  Blog
                </NavLink>
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
