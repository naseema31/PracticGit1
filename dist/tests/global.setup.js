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
const common_fixture_1 = require("../Fixtures/common-fixture");
const DashboardPage_1 = require("../pages/DashboardPage");
const test_1 = require("@playwright/test");
(0, common_fixture_1.test)('Global Setup for Auto Login', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page, loginPage }) {
    loginPage.gotoOrangeHrm();
    yield loginPage.gotoOrangeHrm();
    yield loginPage.loginOrangeHrm('Admin', 'admin123');
    // await page.waitForURL(process.env.BASE_URL+`/web/index.php/dashboard/index`);
    yield page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    yield (0, test_1.expect)(DashboardPage_1.DashboardPage.dashboardTitleText).toHaveText('Dashboard');
    yield page.context().storageState({
        path: './playwright/.auth/auth.json'
    });
}));
