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
const pom_fixture_1 = require("../Fixtures/pom-fixture");
//import CommonUtils from '../utils/CommonUtils';
const test_1 = require("@playwright/test");
pom_fixture_1.test.beforeEach('Before Each Hook', (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginPage }) {
    yield loginPage.gotoOrangeHrm();
}));
pom_fixture_1.test.beforeEach('After Each Hook', (_a) => __awaiter(void 0, [_a], void 0, function* ({ userPage }) {
    yield userPage.logout();
}));
(0, pom_fixture_1.test)("Temp test", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page, loginPage }) {
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
}));
// await loginPage.gotoOrangeHrm();
//await loginPage.loginOrangeHrm('Admin','admin123');
//const CommonUtilsObj=new CommonUtils();
//CommonUtilsObj.encryptData('admin123');
//const decryptedUserName=console.log(CommonUtilsObj.decryptData(process.env.USER_NAME!));
//const decryptedUserPassword= console.log(CommonUtilsObj.decryptData(process.env.PASSWORD!));
//await loginPage.gotoOrangeHrm();
//await loginPage.loginOrangeHrm(decryptedUserName,decryptedUserPassword);
(0, pom_fixture_1.test)("Temp test 2", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page, loginPage }) {
    yield (0, test_1.expect)(page).toHaveTitle('OrangeHRM');
}));
