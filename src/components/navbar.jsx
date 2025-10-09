import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="flex items-center justify-center w-10 h-10 font-bold bg-white rounded-lg shadow-md"
      >
        <p className="blue-gradient-text">AB</p>
      </NavLink>
      <nav className="flex text-lg font-medium gap-7 font">
        <NavLink
          to="/about"
          className="relative overflow-hidden text-gray-700 transition-all duration-300 hover:text-black before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:bg-white before:rounded-full before:duration-500 before:ease-out hover:before:w-56 hover:before:h-56 before:-z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:bg-white after:rounded-full after:duration-500 after:ease-out hover:after:w-56 hover:after:h-56 after:-z-10"
          style={{
            transition: "color 0.3s ease",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            borderRadius: "10px",
            padding: "10px 20px",
          }}
        >
          About
          <span
            className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              animation: "shine 1s linear infinite",
              opacity: "50%",
            }}
          ></span>
        </NavLink>
      </nav>
    </header>
  );
};

export default navbar;
