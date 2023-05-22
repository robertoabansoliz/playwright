import { Locator, Page } from '@playwright/test';

export class Product {
  readonly page: Page;
  readonly titlePage: Locator;
  readonly backpack: Locator;
  readonly bikeLight: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('.header_secondary_container .title');
    this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async getTitle() {
    await this.titlePage.innerText();
  }

  async selectBikeLight() {
    await this.bikeLight.click();
  }

  async selectBackpack() {
    await this.backpack.click();
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }
}
