'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, Bed, Square, Building2 } from 'lucide-react';
import { Property } from '@/types/property';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
}

// Format price nicely
function formatPrice(price: number): string {
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} млрд`;
  }
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)} млн`;
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(0)}K`;
  }
  return price.toString();
}

// Type labels
const typeLabels: Record<string, { label: string; className: string }> = {
  rent: { label: 'Аренда', className: 'badge-warm' },
  sale: { label: 'Продажа', className: 'badge-mint' },
  daily_rent: { label: 'Посуточно', className: 'bg-[#FFF3CD] text-[#856404]' },
};

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(property.is_favorited);
  const typeInfo = typeLabels[property.type] || typeLabels.rent;

  return (
    <Link href={`/property/${property.id}`}>
      <article className="card-cozy overflow-hidden group cursor-pointer">
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]?.image || '/placeholder.jpg'}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`${typeInfo.className} px-3 py-1.5 rounded-full text-sm font-medium`}>
              {typeInfo.label}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorited(!isFavorited);
            }}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isFavorited
                ? 'bg-[var(--primary)] text-white'
                : 'bg-white/90 text-[var(--muted-foreground)] hover:bg-white hover:text-[var(--primary)]'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-soft">
              <span className="text-xl font-bold text-[var(--foreground)]">
                {formatPrice(property.price)}
              </span>
              <span className="text-sm text-[var(--muted-foreground)] ml-1">
                {property.type === 'sale' ? 'сум' : 'сум/мес'}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-bold text-lg text-[var(--foreground)] mb-2 line-clamp-1 group-hover:text-[var(--primary)] transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-4">
            <MapPin className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm line-clamp-1">{property.address}</span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
            {property.rooms && (
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[var(--secondary)]" />
                <span className="text-sm text-[var(--muted-foreground)]">{property.rooms} комн.</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center gap-1.5">
                <Square className="w-4 h-4 text-[var(--secondary)]" />
                <span className="text-sm text-[var(--muted-foreground)]">{property.area} м²</span>
              </div>
            )}
            {property.floor && (
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[var(--secondary)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  {property.floor}/{property.total_floors}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
