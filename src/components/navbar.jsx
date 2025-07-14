import { NavLink } from "react-router-dom"

const navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="flex items-center justify-center w-10 h-10 font-bold bg-white rounded-lg shadow-md">
      <p className="blue-gradient-text">
        AB
      </p>
      </NavLink>
      <nav className="flex text-lg font-medium gap-7 font">
        <NavLink to="/about" className={isActive => isActive ? "text-blue-500" : "text-gray-700"}>
        About
        </NavLink>
      </nav>
    </header>
  )
}

export default navbar
