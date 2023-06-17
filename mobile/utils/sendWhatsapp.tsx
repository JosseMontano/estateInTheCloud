import { Linking } from "react-native";

const handleSendWhatsapp = (cellphonenumber: string) => {
  Linking.openURL("https://api.whatsapp.com/send?phone=" + cellphonenumber);
};

export default handleSendWhatsapp;
