'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: 'MY DETAILS', path: '/' },
        { label: 'TECHSTACK', path: '/techstack' },
        { label: 'PROJECTS', path: '/projects' },
    ];

    return (
        <nav className="fixed top-0 left-0 h-screen w-32 bg-black py-6 flex flex-col items-center z-50">
            <div className="mb-8 cursor-pointer">
                <Link href="/">
                    <Image
                        src="/images/monkey.gif"
                        alt="Monkey Logo"
                        width={60}
                        height={60}
                    />
                </Link>
            </div>
            <ul className="flex flex-col gap-6 w-full">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <li key={item.path}>
                            <Link href={item.path}>
                                <span
                                    className={`font-bold text-xs tracking-widest px-4 py-2 block transition-colors duration-200 cursor-pointer ${
                                        isActive
                                            ? 'text-white border-l-4 border-pink-200 bg-black'
                                            : 'text-gray-600 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
