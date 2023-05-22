import { Locator, Page } from '@playwright/test';

export class CheckoutComplete {
  readonly page: Page;
  readonly backHomeButton: Locator;
  readonly successMessage: Locator;
  readonly titlePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('.header_secondary_container span');
    this.backHomeButton = page.locator('#back-to-products');
    this.successMessage = page.locator('.complete-header');
  }

  async clickBackHomeButton() {
    await this.backHomeButton.click();
  }

  async getProductTitle() {
    await this.successMessage.innerText();
  }

  async getTitlePage() {
    await this.titlePage.innerText();
  }
}
