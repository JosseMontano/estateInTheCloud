export default interface REOnePublicationType {
  id: number;
  title: string;
  description: string;
  available: boolean;
  amount_bedroom: number;
  price: number;
  amount_bathroom: number;
  square_meter: number;
  user_id: number;
  user: User;
  type_real_estate_id: number;
  type_real_state: Typerealstate;
  photos: Photo[];
}

export interface Photo {
  id: number;
  url: string;
  public_id: string;
}

interface Typerealstate {
  id: number;
  name: string;
}

interface User {
  id: number;
  user_name: string;
  cellphone_number: string;
  email: string;
  password: string;
  qualification: number;
  url_photo: string;
  code_recuperation: string;
}