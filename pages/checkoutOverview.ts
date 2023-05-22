import { Locator, Page } from '@playwright/test';

export class CheckoutOverview {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly productTitle: Locator;
  readonly titlePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('.header_secondary_container span');
    this.finishButton = page.locator('#finish');
    this.productTitle = page.locator('.inventory_item_name');
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }

  async getProductTitle() {
    await this.productTitle.innerText();
  }

  async getTitlePage() {
    await this.titlePage.innerText();
  }
}
