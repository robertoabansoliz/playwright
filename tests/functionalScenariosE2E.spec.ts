import { test, expect } from '@playwright/test';
import { Checkout } from '../pages/checkout';
import { CheckoutOverview } from '../pages/checkoutOverview';
import { CheckoutComplete } from '../pages/checkoutComplete';
import { Login } from '../pages/login';
import { Product } from '../pages/product';
import { YourCart } from '../pages/yourCart';
import { URLS, CREDENTIALS, CHECKOUT } from '../data/data';

test.beforeEach(async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
});

test('verify that user is able to buy a product', async ({ page }) => {
  const loginPage = new Login(page);
  const productPage = new Product(page);
  const yourCartPage = new YourCart(page);
  const checkouPage = new Checkout(page);
  const checkoutOverviewPage = new CheckoutOverview(page);
  const checkoutCompletePage = new CheckoutComplete(page);
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
  await checkouPage.checkout(
    CHECKOUT.FIRSTNAME,
    CHECKOUT.LASTNAME,
    CHECKOUT.ZIPCODE,
  );
  await expect(checkoutOverviewPage.titlePage).toHaveText('Checkout: Overview');
  await expect(checkoutOverviewPage.productTitle).toHaveText(
    'Sauce Labs Backpack',
  );
  await checkoutOverviewPage.clickFinishButton();
  await expect(checkoutCompletePage.successMessage).toHaveText(
    'Thank you for your order!',
  );
  await checkoutCompletePage.clickBackHomeButton();
  await expect(productPage.titlePage).toHaveText('Products');
});

test('verify that user is able to remove to select other product', async ({
  page,
}) => {
  const loginPage = new Login(page);
  const productPage = new Product(page);
  const yourCartPage = new YourCart(page);
  const checkouPage = new Checkout(page);
  const checkoutOverviewPage = new CheckoutOverview(page);
  const checkoutCompletePage = new CheckoutComplete(page);
  await loginPage.login(
    CREDENTIALS.SAUCEDEMOUSER,
    CREDENTIALS.SAUCEDEMOPASSWORD,
  );
  await expect(productPage.titlePage).toHaveText('Products');
  await productPage.selectBackpack();
  await productPage.clickCartIcon();
  await expect(yourCartPage.titlePage).toHaveText('Your Cart');
  await expect(yourCartPage.productTitle).toHaveText('Sauce Labs Backpack');
  await yourCartPage.clickRemoveButton();
  await yourCartPage.clickContinueShopping();
  await expect(productPage.titlePage).toHaveText('Products');
  await productPage.selectBikeLight();
  await productPage.clickCartIcon();
  await expect(yourCartPage.productTitle).toHaveText('Sauce Labs Bike Light');
  await yourCartPage.clickCheckoutButton();
  await expect(checkouPage.titlePage).toHaveText('Checkout: Your Information');
  await checkouPage.checkout(
    CHECKOUT.FIRSTNAME,
    CHECKOUT.LASTNAME,
    CHECKOUT.ZIPCODE,
  );
  await expect(checkoutOverviewPage.titlePage).toHaveText('Checkout: Overview');
  await expect(checkoutOverviewPage.productTitle).toHaveText(
    'Sauce Labs Bike Light',
  );
  await checkoutOverviewPage.clickFinishButton();
  await expect(checkoutCompletePage.successMessage).toHaveText(
    'Thank you for your order!',
  );
  await checkoutCompletePage.clickBackHomeButton();
  await expect(productPage.titlePage).toHaveText('Products');
});
