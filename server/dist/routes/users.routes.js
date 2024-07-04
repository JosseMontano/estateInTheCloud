"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamsStr = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_controller_1 = require("../controllers/users.controller");
const getParamsStr = (params) => {
    const arr = [];
    for (const key in params) {
        if (params[key]) {
            arr.push(`${key}=${params[key]}`);
        }
    }
    return "?" + arr.join("&");
};
exports.getParamsStr = getParamsStr;
const signUp = (code, appUrl, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const url = baseUrl + (0, exports.getParamsStr)(params);
        const response = yield fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const data = yield response.json();
            const verify = yield fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${data.id_token}`);
            if (verify.ok) {
                const userData = yield verify.json();
                const googleUser = userData;
                res.send(`<script>window.location.replace("${appUrl}?userId=${googleUser.sub}&name=${googleUser.name}")</script>`);
            }
        }
        else {
            res.json({
                error: "¡Ocurrió un error inesperado, inténtalo de nuevo!",
                data: yield response.json(),
            });
        }
    }
    catch (e) {
        res.json({
            error: "¡Ocurrió un error inesperado, inténtalo de nuevo!",
            data: JSON.stringify(e),
        });
    }
});
router.get("/google", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, state: appUrl } = req.query;
    if (!code) {
        return res.status(400).json({
            error: "Código inválido",
        });
    }
    signUp(code, appUrl, res);
}));
router.put("/editPhotoUser/:email", users_controller_1.updatePhotoUser);
router.post("/recuperateAccount/:email", users_controller_1.sendEmailCode);
router.post("/changePassword/", users_controller_1.changePassword);
router.get("/getUserComplete/:id", users_controller_1.getUserById);
router.get("/", (req, res) => {
    return res.send("Hello");
});
module.exports = router;
