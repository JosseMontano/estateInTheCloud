export interface RealEstate {
  idphoto: number;
  idrealestatephoto: number;
  idrealestate: number;
  iduser: number;
  url: string;
  title: string;
  description: string;
  publicId: string;
  email: string;
  cellphonenumber: string;
  available: boolean;
}

export interface FormDeleteType {
  idrealestatephoto: number;
  idphoto: number;
  idrealestate: number;
}


