
import { ShieldCheck, Twitter, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 text-brand-600">
              <ShieldCheck className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">SecureChainPay</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Revolutionizing financial security with blockchain technology.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/features" className="text-base text-gray-500 hover:text-brand-600">Features</Link>
              </li>
              <li>
                <Link to="/demo" className="text-base text-gray-500 hover:text-brand-600">Demo</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-base text-gray-500 hover:text-brand-600">Pricing</Link>
              </li>
              <li>
                <Link to="/security" className="text-base text-gray-500 hover:text-brand-600">Security</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/about" className="text-base text-gray-500 hover:text-brand-600">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-500 hover:text-brand-600">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-500 hover:text-brand-600">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-brand-600">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-base text-gray-500 hover:text-brand-600">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-500 hover:text-brand-600">Terms</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-base text-gray-500 hover:text-brand-600">Cookies</Link>
              </li>
              <li>
                <Link to="/licenses" className="text-base text-gray-500 hover:text-brand-600">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {currentYear} SecureChainPay. Hackathon project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
