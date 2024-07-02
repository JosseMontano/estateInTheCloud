export type sectionType = "sectionUsers" | "sectionRealEstate" | "sectionQuestions";
export type stateUser = "available" | "noAvailable";
export interface User {
  cellphone_number: string;
  code_recuperation: string;
  email: string;
  favorite_real_estate: FavoriteRealEstate;
  id: number;
  password: string;
  qualification: number;
  role: number;
  url_photo: string;
  user_name: string;
  available: boolean;
}

interface FavoriteRealEstate {
  id: number;
  real_estate_id: number;
  user_id: number;
}