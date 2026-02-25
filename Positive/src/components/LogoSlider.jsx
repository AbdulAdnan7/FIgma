import React from "react";

const LogoSlider = () => {
    const logos = [
        "/one.svg",
        "/two.svg",
        "/three.svg",
        "/four.svg",
        "/five.svg",
        "/six.svg",
        "/seven.svg",
        "/eight.svg",
    ];

    return (
        <div className="mt-17.5 relative">
            <div className="mx-auto max-w-7xl px-5 relative overflow-hidden">

                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-25 bg-linear-to-r from-white to-transparent z-10" />

                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-25 bg-linear-to-l from-white to-transparent z-10" />

                {/* Slider */}
                <div className="flex min-w-max animate-scroll gap-16 md:gap-20 lg:gap-24 items-center whitespace-nowrap">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Company logo"
                            className="h-6 md:h-8 lg:h-9 object-contain opacity-80 hover:opacity-100 transition"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default LogoSlider;