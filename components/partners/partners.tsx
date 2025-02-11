import React, { FunctionComponent } from "react";

export interface Partner {
  name?: string;
  href?: string;
  icon?: JSX.Element;
}

interface PartnersProps {
  partners: Partner[];
  showNames: boolean;
}

const Partners: FunctionComponent<PartnersProps> = ({
  partners,
  showNames,
}) => {
  return (
    <div className="relative py-16 flex items-center flex-col sm:flex-row mb-6">
      {/* Description */}
      <div className="sm:mr-8 w-full sm:w-fit">
        <p className="font-poppins w-full sm:w-[240px] text-base font-medium leading-6 sm:text-left text-gray-500 text-center">
          Integrated by the whole Starknet ecosystem
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        {/* Right Blur */}
        <div className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

        {/* Scrolling Content */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-fit">
          {[...partners, ...partners].map((partner, index) => (
            <a
              key={index}
              className="flex flex-col items-center text-center"
              target="_blank"
              rel="noreferrer"
              href={partner.href}
            >
              <div className="flex justify-center gap-4 items-center w-32 h-32">
                {partner.icon}
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
