export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'entrance' | 'chalet' | 'room' | 'merchandise';
  image?: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: Date;
  service: string;
  guests: number;
  message?: string;
}

export interface Activity {
  id: string;
  name: string;
  icon: string;
  description: string;
}