'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Home, Heart, Plus, User, Menu, X, Search } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="/logo.jpg"
                alt="IJARA UZ"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xl font-bold text-[var(--foreground)]">IJARA</span>
              <span className="text-xl font-bold text-[var(--primary)]"> UZ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
            >
              <Home className="w-5 h-5" />
              Главная
            </Link>
            <Link
              href="/favorites"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
            >
              <Heart className="w-5 h-5" />
              Избранное
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/create" className="btn-cozy flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Разместить
            </Link>
            <button className="w-11 h-11 rounded-full bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
              <User className="w-5 h-5 text-[var(--muted-foreground)]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-[var(--muted)] flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[var(--foreground)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--foreground)]" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--muted)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-medium">Главная</span>
            </Link>
            <Link
              href="/favorites"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--muted)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-5 h-5 text-[var(--primary)]" />
              <span className="font-medium">Избранное</span>
            </Link>
            <div className="pt-2 space-y-2">
              <Link href="/create" className="btn-cozy w-full flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Разместить объявление
              </Link>
              <button className="btn-outline-cozy w-full flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Войти
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </header>
  );
}
