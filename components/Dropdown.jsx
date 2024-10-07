// components/Dropdown.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";

const Dropdown = ({ label, link1, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center space-x-1">
        {/* Main dropdown label with down arrow */}
        <Link href={`${link1}`} className="flex items-center space-x-1">
          <span>{label}</span>
          <BsCaretDownFill className="text-sm" />
        </Link>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-[15px] z-50 mt-2 w-[270px] bg-white rounded shadow-lg pt-5">
          {links.map((link, index) => (
            <DropdownLink key={index} link={link} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownLink = ({ link }) => {
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsSubDropdownOpen(true)}
      onMouseLeave={() => setIsSubDropdownOpen(false)}
    >
      <Link href={link.href} className="block px-4 py-2 text-sm hover:bg-primary hover:text-white flex justify-between items-center">
        {link.label}
        {link.subLinks && <BsCaretRightFill className="ml-2 text-xs" />} {/* Right caret for nested dropdown */}
      </Link>

      {link.subLinks && isSubDropdownOpen && (
        <div className="absolute left-full top-0 mt-[-5px] hidden group-hover:block w-[270px] rounded bg-white shadow-lg">
          {link.subLinks.map((subLink, subIndex) => (
            <DropdownLink key={subIndex} link={subLink} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
