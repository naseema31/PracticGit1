import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly userName:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.userName=page.getByRole('textbox', { name: 'Username' });
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
    }
    async gotoOrangeHrm(){
       await this.page.goto(`$(process.env.BASE_URL}/web/index.php/auth/login`);
    }
   async  loginOrangeHrm(userName:string,password:string){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}