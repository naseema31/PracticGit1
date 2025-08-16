import {Locator, Page} from "@playwright/test"; 

export class DashboardPage{

    readonly page:Page;
    readonly dashboardTitleText:Locator
    static dashboardTitleText: any;

    constructor(page:Page){
        this.page=page;
        this.dashboardTitleText=page.getByRole('heading', { name: 'Dashboard' });
    }
}