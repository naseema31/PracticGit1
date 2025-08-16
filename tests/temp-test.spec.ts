import {test} from '../Fixtures/pom-fixture';
import { LoginPage } from '../pages/LoginPage';
//import CommonUtils from '../utils/CommonUtils';
import { expect } from '@playwright/test';
import {UserPage} from '../pages/UserPage';

test.beforeEach('Before Each Hook',async({loginPage})=>{
   await loginPage.gotoOrangeHrm();
})

test.beforeEach('After Each Hook',async({userPage})=>{
   await userPage.logout();
})

test("Temp test",async({page,loginPage})=>{
   console.log(process.env.BASE_URL);
   console.log(process.env.USER_NAME);
   console.log(process.env.PASSWORD);
})
 
   // await loginPage.gotoOrangeHrm();
    //await loginPage.loginOrangeHrm('Admin','admin123');
  //const CommonUtilsObj=new CommonUtils();
   //CommonUtilsObj.encryptData('admin123');
   //const decryptedUserName=console.log(CommonUtilsObj.decryptData(process.env.USER_NAME!));
   //const decryptedUserPassword= console.log(CommonUtilsObj.decryptData(process.env.PASSWORD!));
   
   
   
   //await loginPage.gotoOrangeHrm();
   //await loginPage.loginOrangeHrm(decryptedUserName,decryptedUserPassword);
   test("Temp test 2",async({page,loginPage})=>{
   await expect(page).toHaveTitle('OrangeHRM');     
   
})