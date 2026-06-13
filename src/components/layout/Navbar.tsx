import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="font-semibold text-gray-800 text-lg">
          Leave Calendar
        </span>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-800"
            }
          >
            Leave Requests
          </NavLink>
          <NavLink
            to="/oncall"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-800"
            }
          >
            On-Call Schedule
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
