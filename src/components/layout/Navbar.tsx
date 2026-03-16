'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { waLink } from '@/lib/utils';

const links = [
  { href: '/productos', label: 'Muebles' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo wordmark */}
        <Link href="/" className="flex items-center" aria-label="Picapinos — Inicio">
          <Image
            src="/images/PNGs/ASSETS_PICAPINOS-18.png"
            alt="Picapinos"
            width={160}
            height={24}
            priority
            style={{ height: '22px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase transition-opacity hover:opacity-60"
              style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wider uppercase px-5 py-2 transition-opacity hover:opacity-80"
            style={{
              fontFamily: 'var(--font-neue-montreal)',
              backgroundColor: 'var(--color-accent)',
              color: '#F5F2ED',
            }}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          style={{ color: 'var(--color-text)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-neue-montreal)', color: 'var(--color-text)' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider uppercase px-5 py-2 text-center"
              style={{
                fontFamily: 'var(--font-neue-montreal)',
                backgroundColor: 'var(--color-accent)',
                color: '#F5F2ED',
              }}
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
