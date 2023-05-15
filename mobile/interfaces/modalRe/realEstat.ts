export interface RealEstatePhotos {
  id: number;
  title: string;
  description: string;
  available: boolean;
  amount_bedroom: number;
  price: number;
  amount_bathroom: number;
  square_meter: number;
  lat_long: string;
  address: string;
  user_id: number;
  user: User;
  type_real_estate_id: number;
  type_real_state: TypeRealState;
  photos: RealEstatePhoto[];
  favorite_real_estate: FavoriteRealEstate2;
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
  favorite_real_estate: FavoriteRealEstate;
}

interface FavoriteRealEstate {
  id: number;
  real_estate_id: number;
  user_id: number;
}

interface TypeRealState {
  id: number;
  name: string;
}

export interface RealEstatePhoto {
  id: number;
  url: string;
  public_id: string;
}

interface FavoriteRealEstate2 {
  id: number;
  real_estate_id: number;
  user_id: number;
}
