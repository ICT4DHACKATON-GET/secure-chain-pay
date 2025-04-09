
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X, ArrowRight, BarChart3, Home, CreditCard } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 text-brand-600">
              <ShieldCheck className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">SecureChainPay</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-md">Home</Link>
            <Link to="/demo" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-md">Demo</Link>
            <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-md">Dashboard</Link>
            <Link to="/features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-md">Features</Link>
            <Button className="ml-4" variant="default">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              <div className="flex items-center">
                <Home className="mr-3 h-5 w-5" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/demo" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              <div className="flex items-center">
                <CreditCard className="mr-3 h-5 w-5" />
                <span>Demo</span>
              </div>
            </Link>
            <Link to="/dashboard" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              <div className="flex items-center">
                <BarChart3 className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link to="/features" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              <div className="flex items-center">
                <ShieldCheck className="mr-3 h-5 w-5" />
                <span>Features</span>
              </div>
            </Link>
            <Button className="w-full mt-3" variant="default">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
