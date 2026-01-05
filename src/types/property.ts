// Типы недвижимости
export type PropertyType = 'rent' | 'sale' | 'daily_rent';
export type GenderPreference = 'any' | 'male' | 'female' | 'family' | 'military';
export type BoilerType = 'none' | 'factory' | 'custom';
export type RepairType = 'no' | 'cosmetic' | 'euro' | 'designer';
export type BuildingType = 'apartment' | 'private';

export interface PropertyImage {
  id: number;
  image: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  address: string;
  rooms: number;
  area: number;
  floor?: number;
  total_floors?: number;
  latitude?: number;
  longitude?: number;
  images: PropertyImage[];

  // Характеристики
  gender_preference: GenderPreference;
  boiler_type: BoilerType;
  repair_type: RepairType;
  building_type: BuildingType;
  has_furniture: boolean;

  // Удобства
  has_wifi: boolean;
  has_conditioner: boolean;
  has_washing_machine: boolean;
  has_fridge: boolean;
  has_parking: boolean;
  has_elevator: boolean;
  has_balcony: boolean;
  pets_allowed: boolean;

  // Владелец
  owner_name: string;
  owner_phone: string;
  owner_email?: string;

  // Мета
  status: 'active' | 'inactive';
  is_favorited?: boolean;
  created_at: string;
  min_rental_days?: number;
}
