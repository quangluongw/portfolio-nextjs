'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faMoon as faSolidMoon, faSun as faSolidSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
export default function Header() {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {

        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div>
            <header>
                <nav className="flex gap-4 justify-between items-center  ">
                    <li>
                        <Image
                            src="https://anhvanhoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5d65b436.png&w=1080&q=75"
                            alt="Ảnh đại diện"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                    </li>
                    <div className="flex items-center gap-4">
                        <li className="cursor-pointer hover:text-[#EBB12D]">Blog</li>
                        <li className="cursor-pointer hover:text-[#EBB12D]">Resume</li>
                        <li onClick={toggleTheme} className="cursor-pointer">
                            {theme === "light" ? (
                                <FontAwesomeIcon icon={faSolidSun} />
                            ) : (
                                <FontAwesomeIcon icon={faSolidMoon} />
                            )}
                        </li>
                    </div>
                </nav>
            </header>
        </div>
    )
}
