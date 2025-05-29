"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faMoon as faSolidMoon,
  faSun as faSolidSun,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../image/logo.png";
import { faBars, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { logout } from "@/services/logout";
import { usePathname, useRouter } from "next/navigation";
import useUser from "@/app/hooks/useUser";
import CategoryBlog from "../Category";
export default function Header() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [open, setopen] = useState(false);
  useEffect(() => {
    setopen(false);
  }, [pathname]);
  const { user } = useUser();

  const router = useRouter();
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const handleLogout = () => {
    logout();
    router.refresh();
    router.push("/login");
  };
  const handSearch = () => {
    router.push(`/blog?search=${search}`);
  };
  return (
    <header>
      <nav className="flex gap-4 justify-between items-center">
        <li>
          <Link href="/">
            <Image
              src={avatar}
              alt="Ảnh đại diện"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Link>
        </li>
        <div className="hidden sm:flex items-center gap-4">
          <div>
            <CategoryBlog open={open} />
          </div>
          <li
            className="cursor-pointer hover:text-[#EBB12D] relative"
            onClick={() => setopen(!open)}
          >
            Blog <FontAwesomeIcon icon={faArrowDown} />
          </li>
          <li className="cursor-pointer hover:text-[#EBB12D]">
            <Link href="/resume">Resume</Link>
          </li>
          {user && (
            <div className="flex flex-row gap-3">
              <li className="cursor-pointer hover:text-[#EBB12D]">
                <Link href="/admin">Admin</Link>
              </li>
              <li
                className="cursor-pointer hover:text-[#EBB12D]"
                onClick={handleLogout}
              >
                <div>Logout</div>
              </li>
            </div>
          )}
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="border-2 px-2 py-1 rounded-2xl "
              onChange={(e) => setSearch(e.target.value)}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handSearch} className="absolute top-2 right-3"/>
          </div>
          <li onClick={toggleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <FontAwesomeIcon icon={faSolidSun} />
            ) : (
              <FontAwesomeIcon icon={faSolidMoon} />
            )}
          </li>
        </div>
        <div className=" sm:hidden text-[1.4rem]">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </header>
  );
}
