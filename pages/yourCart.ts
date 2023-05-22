import { Locator, Page } from '@playwright/test';

export class YourCart {
  readonly page: Page;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;
  readonly productTitle: Locator;
  readonly titlePage: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('.header_secondary_container span')
    this.removeButton = page.locator('#remove-sauce-labs-backpack');
    this.checkoutButton = page.locator('#checkout');
    this.productTitle = page.locator('.inventory_item_name');
    this.continueShoppingButton = page.locator('#continue-shopping')
  }

  async clickRemoveButton() {
    await this.removeButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click()
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async getProductTitle() {
    await this.productTitle.innerText();
  }

  async getTitlePage() {
    await this.titlePage.innerText();
  }

}