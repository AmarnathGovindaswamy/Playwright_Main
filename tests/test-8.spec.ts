import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');;
  await page.locator('[data-test="password"]').fill('secret_sauce');;
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="header-container"]')).toContainText('Swag Labs');
});


  // await page.locator('[data-test="login-credentials"]').dblclick();
  // await page.locator('body').press('ControlOrMeta+c');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="login-password"]').click({
  //   clickCount: 3
  // });
  // await page.locator('body').press('ControlOrMeta+c');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.locator('[data-test="login-button"]').click();
  // await page.getByText('Swag Labs').click();
// });