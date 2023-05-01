import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveCookie = async (nameCookie: string, val: string) => {
  await AsyncStorage.setItem(nameCookie, val);
};

export const getCookie = async (name: string): Promise<{ token: string }> => {
  const token = await AsyncStorage.getItem(name);

  if (token) {
    return {
      token,
    };
  }

  return {
    token: "",
  };
};

//await AsyncStorage.removeItem('key');