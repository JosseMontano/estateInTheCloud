import { Router } from "express";

const router = Router();
import {
  updatePhotoUser,
  getUserById,
  sendEmailCode,
  changePassword
} from "../controllers/users.controller";

router.put("/editPhotoUser/:email", updatePhotoUser);
router.post("/recuperateAccount/:email", sendEmailCode);
router.post("/changePassword/", changePassword);
router.get("/getUserComplete/:id", getUserById);


export const getParamsStr = (params: Record<string, string | undefined>) => {
  const arr = [];
  for (const key in params) {
    if (params[key]) {
      arr.push(`${key}=${params[key]}`);
    }
  }
  return "?" + arr.join("&");
};

interface GoogleUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
}


const signUp = async (code: string, appUrl: string, res: any) => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const BACKEND_URL = process.env.BACKEND_URL;

  try {
    const baseUrl = "https://oauth2.googleapis.com/token";
    const params = {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: BACKEND_URL + "google",
      state: "1234_purpleGoogle",
      prompt: "consent",
      grant_type: "authorization_code",
    };
    const url = baseUrl + getParamsStr(params);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const verify = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${data.id_token}`
      );
      if (verify.ok) {
        const userData = await verify.json();
        const googleUser: GoogleUser = userData;
        res.send(
          `<script>window.location.replace("${appUrl}?userId=${googleUser.sub}&name=${googleUser.name}")</script>`
        );
      }
    } else {
      res.json({
        error: "¡Ocurrió un error inesperado, inténtalo de nuevo!",
        data: await response.json(),
      });
    }
  } catch (e) {
    res.json({
      error: "¡Ocurrió un error inesperado, inténtalo de nuevo!",
      data: JSON.stringify(e),
    });
  }
};


router.get("/google", async (req, res) => {
  const { code, state: appUrl } = req.query;
  if (!code) {
    return res.status(400).json({
      error: "Código inválido",
    });
  }
  signUp(code as string, appUrl as string, res);
});


module.exports = router;
