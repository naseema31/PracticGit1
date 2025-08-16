"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
class CommonUtils {
    constructor() {
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        }
        else {
            throw new Error("please provide Secret Key while starting execution.");
        }
    }
    encryptData(data) {
        const encryptedData = crypto_js_1.default.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }
    decryptData(encData) {
        const decryptedData = crypto_js_1.default.AES.decrypt(encData, this.secretKey).toString(crypto_js_1.default.enc.utf8);
        return decryptedData;
    }
}
exports.default = CommonUtils;
