'use client';

import { useState } from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  activeFilter: string | null;
}

export function SearchSection({ onSearch, onFilter, activeFilter }: SearchSectionProps) {
  const [query, setQuery] = useState('');

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'rent', label: 'Аренда' },
    { id: 'sale', label: 'Купить' },
    { id: 'daily_rent', label: 'Посуточно' },
  ];

  return (
    <section className="py-12">
      <div className="container">
        {/* Hero Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4">
            Найди своё <span className="text-[var(--primary)]">уютное</span> место
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl mx-auto">
            Тысячи вариантов жилья по всему Узбекистану. Начни поиск прямо сейчас!
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto">
          <div className="card-cozy p-3 flex flex-col md:flex-row gap-3">
            {/* Location Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[var(--muted)] rounded-2xl">
              <MapPin className="w-5 h-5 text-[var(--primary)]" />
              <input
                type="text"
                placeholder="Город или район..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
                className="flex-1 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={() => onSearch(query)}
              className="btn-cozy flex items-center justify-center gap-2 px-8"
            >
              <Search className="w-5 h-5" />
              <span>Найти</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilter(filter.id === 'all' ? '' : filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                (filter.id === 'all' && !activeFilter) || activeFilter === filter.id
                  ? 'bg-[var(--foreground)] text-white shadow-soft-lg'
                  : 'bg-white text-[var(--muted-foreground)] hover:bg-[var(--muted)] shadow-soft'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
