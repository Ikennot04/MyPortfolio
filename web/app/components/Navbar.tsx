'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navigation structure with submenus
  const navItems = [
    { label: 'MY DETAILS', path: '/' },
    {
       label: 'Projects', path: '/projects' ,
    },
  ];

  interface NavChild {
    label: string;
    path: string;
  }

  interface NavItem {
    label: string;
    path?: string;
    children?: NavChild[];
  }

  const toggleMenu = (label: string) => {
    setOpenMenus((prev: Record<string, boolean>) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobile = () => setMobileOpen(false);

  const renderNav = (mode: 'desktop' | 'mobile') => (
    <ul className="flex flex-col gap-1 w-full">
      {(navItems as NavItem[]).map((item) => {
        if (item.children) {
          const isChildActive = item.children.some((child) => pathname === child.path);
          const isOpen = openMenus[item.label] || isChildActive;

          return (
            <li key={item.label} className="w-full">
              <button
                onClick={() => toggleMenu(item.label)}
                className={[
                  'w-full px-3 py-2 rounded-xl',
                  'flex items-center justify-between gap-3',
                  'text-[11px] font-semibold tracking-[0.18em] uppercase',
                  isChildActive ? 'text-white' : 'text-zinc-300 hover:text-white',
                  mode === 'mobile' ? 'hover:bg-white/10' : 'hover:bg-white/5',
                  'transition',
                ].join(' ')}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
                <FiChevronDown className={['shrink-0 transition-transform', isOpen ? 'rotate-180' : 'rotate-0'].join(' ')} />
              </button>

              {isOpen && (
                <ul className="mt-1 ml-2 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {item.children.map((child) => {
                    const isActive = pathname === child.path;
                    return (
                      <li key={child.path}>
                        <Link
                          href={child.path}
                          onClick={mode === 'mobile' ? closeMobile : undefined}
                          className={[
                            'block px-3 py-2 rounded-lg',
                            'text-sm',
                            isActive ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white hover:bg-white/5',
                            'transition',
                          ].join(' ')}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        }

        const isActive = pathname === item.path;
        if (!item.path) return null;

        return (
          <li key={item.path} className="w-full">
            <Link
              href={item.path}
              onClick={mode === 'mobile' ? closeMobile : undefined}
              className={[
                'block px-3 py-2 rounded-xl',
                'text-[11px] font-semibold tracking-[0.18em] uppercase',
                isActive ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white hover:bg-white/5',
                'transition',
              ].join(' ')}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 backdrop-blur border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/monkey.gif" alt="Logo" width={36} height={36} className="rounded-lg" />
            <span className="text-sm font-semibold tracking-wide text-white">Portfolio</span>
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={closeMobile}
            aria-label="Close menu overlay"
          />
          <nav className="absolute top-14 left-0 right-0 max-h-[calc(100vh-3.5rem)] overflow-auto bg-zinc-950 border-b border-white/10 p-4">
            <div className="mb-4">
              <div className="text-xs text-zinc-400 tracking-widest uppercase">Navigate</div>
            </div>
            {renderNav('mobile')}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-72 px-5 py-6 z-40">
        <div className="w-full rounded-3xl bg-zinc-950/70 backdrop-blur border border-white/10 shadow-2xl flex flex-col">
          <div className="px-4 pt-5 pb-4 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/monkey.gif" alt="Logo" width={44} height={44} className="rounded-xl" />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">Kent Flores</div>
                <div className="text-xs text-zinc-400">Backend • Full-stack</div>
              </div>
            </Link>
          </div>

          <div className="px-3 py-4 flex-1 overflow-auto">
            {renderNav('desktop')}
          </div>

          <div className="px-4 py-4 border-t border-white/10">
            <div className="text-xs text-zinc-400">
              <span className="text-zinc-200 font-medium">Available for work</span>
              <div className="mt-1">
                <a className="hover:text-white transition" href="mailto:kentjohnbrianflores@gmail.com">
                  kentjohnbrianflores@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
