// import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-600">CA MONK</span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-6 font-medium text-gray-700">
        <Button variant="link">
                  <Link to="/" >
                    Home
                      </Link>
        </Button>
        
        <Button variant="link">
                  <Link to="/create" >
                    Create Post
                      </Link>
        </Button>
        
      </div>

      {/* Buttons */}
      <div className="space-x-3">
        <Button variant="primary">Profile</Button>
      </div>
    </nav>
  );
};

export default Navbar;
