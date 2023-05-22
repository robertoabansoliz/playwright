import { Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async enterUserName(userName) {
    await this.userNameField.fill(userName);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(userName, password) {
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
