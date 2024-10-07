// components/DropdownLink.js
import { useState } from 'react';
import Link from 'next/link';

export default function DropdownLink({ label, links }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu1 = () => {
        setIsOpen(!isOpen);
      };
    

    return (
        <div className="relative inline-block text-left mt-3">
            <button onClick={() => toggleMenu1()}
                className=""
            >
                {label}
            </button>

            {isOpen && (
                <div className=" relative mt-2 pt-1">
                    <div className="py-1">


                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="block py-2 text-sm">
                            {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
