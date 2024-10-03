// components/Dropdown.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Dropdown = ({ label,link1,links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link href={`${link1}`}>
        {label}
      </Link>
      {isDropdownOpen && (
        <div className="absolute top-[15px] z-50 mt-2 w-[200px]  bg-white rounded shadow-lg pt-5">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="block px-4 py-2 hover:bg-primary hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;