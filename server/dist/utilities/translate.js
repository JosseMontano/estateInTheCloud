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
exports.postService = exports.headers = exports.translateEnglishToSpanish = exports.translateToSpanish = void 0;
const { servers } = require("../config");
const translateToSpanish = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const val = yield (0, exports.translateEnglishToSpanish)(text);
    return val;
});
exports.translateToSpanish = translateToSpanish;
const translateEnglishToSpanish = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const url = servers.serverPy + "translate-en-es";
    const { json } = yield postService(url, msg);
    //@ts-ignore
    const { val } = json;
    return val;
});
exports.translateEnglishToSpanish = translateEnglishToSpanish;
exports.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
function postService(url, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: "POST",
            headers: exports.headers,
            body: JSON.stringify({
                val: msg,
            }),
        });
        console.log(msg);
        const json = yield response.json();
        const status = response.status;
        return { json, status };
    });
}
exports.postService = postService;
