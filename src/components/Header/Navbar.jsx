import { Link, NavLink } from "react-router";
import logo from "/src/assets/logo.png";
const Navbar = () => {
  // Styles for desktop & mobile
  const desktopNavClass = ({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold underline underline-offset-8 decoration-2 bg-transparent focus:bg-transparent"
      : "hover:text-violet-600 bg-transparent focus:bg-transparent";

  const mobileNavClass = ({ isActive }) =>
    isActive ? "!bg-violet-600 !text-white" : "hover:text-violet-600";

  return (
    <div className="navbar bg-base-100 border-b border-slate-100 px-4 sm:px-6 lg:px-10 h-20 min-h-0 relative z-50">
      {/* Navbar Start: Mobile Dropdown Menu + Logo */}
      <div className="navbar-start">
        {/* DaisyUI Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Toggle menu"
            className="btn btn-ghost md:hidden p-2 text-slate-700 hover:text-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-box w-52 gap-2 text-slate-700 font-medium"
          >
            <li>
              <NavLink to="/" className={mobileNavClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={mobileNavClass}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={mobileNavClass}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2 md:ml-0">
          <img src={logo} alt="Hero.io" className="h-8 w-8" />
          <span className="text-xl font-extrabold tracking-tight text-violet-600">
            HERO.IO
          </span>
        </Link>
      </div>

      {/* Navbar Center: Desktop Links */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-[15px] font-medium text-slate-700">
          <li>
            <NavLink to="/" className={desktopNavClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={desktopNavClass}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={desktopNavClass}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End: Contribute Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/hamim404/"
          target="_blank"
          rel="noreferrer"
          className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg gap-2 normal-case"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          <span className="hidden sm:inline">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
