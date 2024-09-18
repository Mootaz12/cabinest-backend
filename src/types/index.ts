export type User = {
  userId?: number;
  fullName: string;
  email: string;
  imageUrl?: string;
  password?: string;
};
export type Cabin = {
  cabinName: string;
  cabinId?: number;
  maxCapacity: number;
  price: number;
  discount?: number;
  imageUrl?: string;
  description: string;
};
export type CabinFilterType = 'All' | 'With discount' | 'No discount';
