import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between flex-wrap px-4 sm:px-6 py-4 relative text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="AirCrop Logo" width="40" height="40" />
        <span className="text-[#F6FAF9] font-['Saira'] text-xl sm:text-2xl">AIRCROP</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-6">
        <div className="flex gap-6">
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold hover:text-[#018D6B] transition">About us</a>
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold hover:text-[#018D6B] transition">Product</a>
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold hover:text-[#018D6B] transition">FAQ</a>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc7_1rlZcBUdjyFlk82ikk2iUnwWrktfKMRJPyMBsWXvXpw3Q/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent border border-[#018D6B] text-[#018D6B] px-4 py-2 rounded font-['Inter'] font-semibold hover:bg-[#018D6B] hover:text-white transition-colors">
            Join the waitlist →
          </button>
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="sm:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F1815] border-t border-[#018D6B] py-4 px-6 flex flex-col gap-4 sm:hidden z-50">
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold">About us</a>
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold">Product</a>
          <a href="#" className="text-[#F5F9F8] font-['Inter'] font-semibold">FAQ</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7_1rlZcBUdjyFlk82ikk2iUnwWrktfKMRJPyMBsWXvXpw3Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-transparent border border-[#018D6B] text-[#018D6B] px-4 py-2 rounded font-['Inter'] font-semibold hover:bg-[#018D6B] hover:text-white transition-colors">
              Join the waitlist →
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
