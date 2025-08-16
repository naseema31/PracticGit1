"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardTitleText = page.getByRole('heading', { name: 'Dashboard' });
    }
}
exports.DashboardPage = DashboardPage;
