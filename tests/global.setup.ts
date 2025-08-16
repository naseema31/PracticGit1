import {test} from '../Fixtures/common-fixture'
import { DashboardPage } from '../pages/DashboardPage';
import CommonUtils from '../utils/CommonUtils';
import { expect } from '@playwright/test';
test('Global Setup for Auto Login',async({page,loginPage})=>{
   
    loginPage.gotoOrangeHrm();
    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm('Admin','admin123');
   // await page.waitForURL(process.env.BASE_URL+`/web/index.php/dashboard/index`);
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(DashboardPage.dashboardTitleText).toHaveText('Dashboard');
    await page.context().storageState({
        path:'./playwright/.auth/auth.json'
    })
})