'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { SearchSection } from '@/components/SearchSection';
import { PropertyCard } from '@/components/PropertyCard';
import { mockProperties, searchProperties } from '@/data/mock-properties';
import { Property } from '@/types/property';
import { Home } from 'lucide-react';

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setProperties(mockProperties);
      return;
    }
    const results = searchProperties(query);
    setProperties(results);
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter || null);
    if (!filter) {
      setProperties(mockProperties);
    } else {
      const results = searchProperties('', { type: filter });
      setProperties(results);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Search Hero */}
      <SearchSection
        onSearch={handleSearch}
        onFilter={handleFilter}
        activeFilter={activeFilter}
      />


      {/* Properties Grid */}
      <section className="py-16">
        <div className="container">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                {activeFilter ? 'Результаты поиска' : 'Свежие объявления'}
              </h2>
              <p className="text-[var(--muted-foreground)] mt-1">
                Найдено {properties.length} вариантов
              </p>
            </div>

            {activeFilter && (
              <button
                onClick={() => handleFilter('')}
                className="btn-outline-cozy text-sm"
              >
                Сбросить
              </button>
            )}
          </div>

          {/* Grid */}
          {properties.length === 0 ? (
            <div className="card-cozy p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--muted)] flex items-center justify-center">
                <Home className="w-10 h-10 text-[var(--muted-foreground)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Ничего не найдено
              </h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                Попробуй изменить параметры поиска
              </p>
              <button onClick={() => handleFilter('')} className="btn-cozy">
                Показать все
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[#D9A090]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Хочешь сдать или продать?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Размести объявление бесплатно и найди покупателя или арендатора уже сегодня
          </p>
          <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-soft-lg transition-all hover:-translate-y-1">
            Разместить объявление
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[var(--muted)]">
        <div className="container text-center">
          <p className="text-[var(--muted-foreground)]">
            2025 IJARA UZ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
