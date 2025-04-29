import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userName = sessionStorage.getItem("username");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    navigate("/signin");
  };

  const token = sessionStorage.getItem("token");

  const navItems = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Profile", url: "/profile" },
    { id: 3, title: "Blogs", url: "/blogs" },
    ...(token ? [] : [{ id: 4, title: "Signup", url: "/signup" }]),
    {
      id: 5,
      title: token ? "Logout" : "Signin",
      url: "/signin",
    },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">PANINI8</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                className={`nav-item ${
                  location.pathname === item.url ? "active" : ""
                }`}
                onClick={item.title === "Logout" ? handleLogout : null}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                className={`mobile-nav-item ${
                  location.pathname === item.url ? "active" : ""
                }`}
                onClick={() => {
                  setIsOpen(false);
                  if (item.title === "Logout") handleLogout();
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
