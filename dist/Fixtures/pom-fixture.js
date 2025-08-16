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
exports.test = void 0;
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const DashboardPage_1 = require("../pages/DashboardPage");
const UserPage_1 = require("../pages/UserPage");
exports.test = test_1.test.extend({
    loginPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new LoginPage_1.LoginPage(page));
    }),
    dashboardPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new DashboardPage_1.DashboardPage(page));
    }),
    userPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new UserPage_1.UserPage(page));
    })
});
