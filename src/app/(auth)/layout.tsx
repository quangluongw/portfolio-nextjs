'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navLinks = [
    { name: 'Đăng ký ', href: "/Register" },
    { name: 'Đăng nhập ', href: "/login" },
]
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((item) => {
                const isActive = pathname=== item.href || (pathname.startsWith(item.href) && item.href !== "/")
                return (
                    <Link className={isActive ? "text-blue-400" : "text-red-500"} href={item.href} key={item.name} > {item.name}</Link>
                )
            })}
            {children}
        </div >
    )
}
