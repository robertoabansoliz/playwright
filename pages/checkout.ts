import { Locator, Page } from '@playwright/test';

export class Checkout {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly zipCodeField: Locator;
  readonly continueButton: Locator;
  readonly titlePage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titlePage = page.locator('.header_secondary_container span')
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.zipCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.errorMessage = page.locator('.error-message-container')
  }

  async getTitlePage() {
    await this.titlePage.innerText();
  }

  async getErrorMessage() {
    await this.errorMessage.innerText();
  }

  async enterFirstName(firstName) {
    await this.firstNameField.fill(firstName)
  }


  async enterLastName(lastName) {
    await this.lastNameField.fill(lastName)
  }

  async enterZipCode(zipCode) {
    await this.zipCodeField.fill(zipCode)
  }

  async clickContinueButton() {
    await this.continueButton.click()
  }

   async checkout(firstName, lastname, zipCode) {
    await this.enterFirstName(firstName)
    await this.enterLastName(lastname)
    await this.enterZipCode(zipCode)
    await this.clickContinueButton()
   }

}