import { test, expect } from '@playwright/test';
import { Product } from '../pages/product';
import { YourCart } from '../pages/yourCart';
import { Checkout } from '../pages/checkout';
import { Login } from '../pages/login';
import { URLS, CREDENTIALS, CHECKOUT } from '../data/data';

test.beforeEach(async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
});

test('verify that user is not able to checkout without valid information', async ({
  page,
}) => {
  const loginPage = new Login(page);
  const productPage = new Product(page);
  const yourCartPage = new YourCart(page);
  const checkouPage = new Checkout(page);
  await loginPage.login(
    CREDENTIALS.SAUCEDEMOUSER,
    CREDENTIALS.SAUCEDEMOPASSWORD,
  );
  await expect(productPage.titlePage).toHaveText('Products');
  await productPage.selectBackpack();
  await productPage.clickCartIcon();
  await expect(yourCartPage.titlePage).toHaveText('Your Cart');
  await expect(yourCartPage.productTitle).toHaveText('Sauce Labs Backpack');
  await yourCartPage.clickCheckoutButton();
  await expect(checkouPage.titlePage).toHaveText('Checkout: Your Information');
  await checkouPage.clickContinueButton();
  await expect(checkouPage.errorMessage).toHaveText(
    'Error: First Name is required',
  );
  await checkouPage.enterFirstName(CHECKOUT.FIRSTNAME);
  await checkouPage.clickContinueButton();
  await expect(checkouPage.errorMessage).toHaveText(
    'Error: Last Name is required',
  );
  await checkouPage.enterLastName(CHECKOUT.LASTNAME);
  await checkouPage.clickContinueButton();
  await expect(checkouPage.errorMessage).toHaveText(
    'Error: Postal Code is required',
  );
});

test('verify that locked out user is not able to login', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(
    CREDENTIALS.SAUCEDEMOLOCKEDUSER,
    CREDENTIALS.SAUCEDEMOPASSWORD,
  );
  await expect(page.locator('.error-message-container')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.',
  );
});

test('verify that invalid user is not able to login', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(
    CREDENTIALS.SAUCEDEMOINVALIDUSER,
    CREDENTIALS.SAUCEDEMOPASSWORD,
  );
  await expect(page.locator('.error-message-container')).toHaveText(
    'Epic sadface: Username and password do not match any user in this service',
  );
});
