import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAN7CAxiagf2lp4toR_oM_bcrUacNCOMUk",
    authDomain: "realestate-c70dc.firebaseapp.com",
    projectId: "realestate-c70dc",
    storageBucket: "realestate-c70dc.appspot.com",
    messagingSenderId: "1021563627356",
    appId: "1:1021563627356:web:2f7f07c7b93f329d6dc399"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);

export { app, auth };
