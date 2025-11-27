import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import { AppContext } from "../context/AppContext";
import { useRef } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const { token, setToken, userData } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        document.getElementById("profile-dropdown")?.classList.add("hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#F5F1ED] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 sm:py-1 md:py-2">
     <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

          {/* Logo and mobile toggle */}
          <div className="flex items-center justify-between w-full md:w-auto space-x-2 sm:space-x-4">

            <button
              className="md:hidden p-1.5 sm:p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-300 transition-all duration-200"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {showMenu ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            

<NavLink
  to="/"
  className="flex items-center justify-center md:justify-start flex-shrink-0 w-full md:w-auto"
>
  <img
    src={assets.blogo1} // or your direct import path
    alt="Logo"
    className="h-16 sm:h-20 md:h-26 object-contain brightness-0"
  />
</NavLink>



          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-stone-900 font-semibold bg-stone-200 shadow-sm"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                  }`
                }
              >
                HOME
              </NavLink>

              {["ABOUT", "SERVICES", "TRAINING"].map((item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-stone-900 font-semibold bg-stone-200 shadow-sm"
                        : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
       

            {/* Profile Section */}
            {token && userData ? (
              <div ref={dropdownRef} className="relative">
                <button 
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-lg hover:bg-stone-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  onClick={() => {
                    const dropdown = document.getElementById('profile-dropdown');
                    dropdown?.classList.toggle('hidden');
                  }}
                >
                  <img
                    src={userData.image}
                    alt="Profile"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-stone-400 object-cover hover:border-stone-600 hover:scale-105 transition-all duration-200"
                  />
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-stone-700" />
                </button>
                
                <div 
                  id="profile-dropdown"
                  className="absolute top-full right-0 mt-2 w-44 sm:w-48 bg-white text-stone-700 rounded-lg shadow-lg border border-stone-200 py-2 z-50 hidden"
                >
                  <div className="px-3 sm:px-4 py-2 border-b border-stone-100">
                    <p className="text-xs sm:text-sm font-medium text-stone-900">My Account</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      document.getElementById('profile-dropdown')?.classList.add('hidden');
                    }}
                    className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                  >
                    My Profile
                  </button>
                  
                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      document.getElementById('profile-dropdown')?.classList.add('hidden');
                    }}
                    className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                  >
                    My Appointments
                  </button>
                  
                  
                  <div className="border-t border-stone-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        document.getElementById('profile-dropdown')?.classList.add('hidden');
                      }}
                      className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-[#6B4E71] text-white px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full font-light hover:bg-[#B76E79] transition-all duration-300 text-xs sm:text-sm md:text-base shadow-sm"
              >
                <span className="hidden sm:inline">Create Account</span>
                <span className="sm:hidden">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#F5F1ED] shadow-xl z-50 md:hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 border-b border-stone-300">
           
              <button
                className="p-1.5 sm:p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                onClick={toggleMenu}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-3 sm:px-4 py-4 sm:py-6">
              <nav className="space-y-1 sm:space-y-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-stone-200 text-stone-900 shadow-sm"
                        : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  HOME
                </NavLink>

                {["ABOUT", "SERVICES", "TRAINING"].map((item, index) => (
                  <NavLink
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-stone-200 text-stone-900 shadow-sm"
                          : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {item}
                  </NavLink>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-stone-300">
                  <NavLink
                    to="/services"
                    className="w-full flex items-center justify-center px-4 py-2.5 sm:py-3 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#6B4E71] hover:bg-[#B76E79] transition-colors"
                    onClick={toggleMenu}
                  >
                    Book now
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;



