import { create } from "zustand";
import { UserType } from "../interfaces/user";

interface UserSatate {
  user: UserType;
  loadUser: (user: UserType) => void;
}

const initialValue: UserType = {
  id: 0,
  email: "",
  user_name: "",
  url_photo: "",
  cellphone_number: "",
};

export const UseUser = create<UserSatate>((set) => ({
  user: initialValue,
  loadUser: (user: UserType) => {
    set(() => ({
      user: user,
    }));
  },
}));
