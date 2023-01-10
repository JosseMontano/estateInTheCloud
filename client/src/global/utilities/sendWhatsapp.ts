const handleSendWhatsapp = (cellphonenumber:string) => {
  window.open(
    "https://api.whatsapp.com/send?phone=" + cellphonenumber + "",
    "_blank"
  );
};

export default handleSendWhatsapp;
