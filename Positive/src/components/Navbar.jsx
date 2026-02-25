import React from "react";

const Navbar = () => {
    return (
        <nav className="mt-8 max-w-360 mx-auto h-17.5 px-5 sm:px-8 lg:px-25 flex items-center justify-between">

            {/* Logo */}
           <div className="flex items-center gap-2 sm:gap-3 font-space">
  <img
    src="/Icon.png"
    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
    alt="logo"
  />

  <h1 className=" font-medium 
                 text-lg sm:text-xl md:text-2xl lg:text-[32px]">
    Positivus
  </h1>
</div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-8">
                <li><a href="#" className="text-black text-lg">About us</a></li>
                <li><a href="#" className="text-black text-lg">Services</a></li>
                <li><a href="#" className="text-black text-lg">Use Cases</a></li>
                <li><a href="#" className="text-black text-lg">Pricing</a></li>
                <li><a href="#" className="text-black text-lg">Blog</a></li>
            </ul>

            {/* Desktop Button */}
            <button className="hidden lg:block border border-black rounded-xl px-7 py-3 hover:bg-black hover:text-white transition">
                Request a quote
            </button>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden text-2xl">
                ☰
            </div>

        </nav>
    );
};

export default Navbar;