import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByText('Dynamic Dropdown (Group +').click();
  await page.getByText('No dropdown action executed.').click();
  await page.getByRole('link', { name: 'Sandbox Advanced' }).click();
  await page.getByTestId('dynamic-group-select').selectOption('Locators');
await page.getByRole('link', { name: 'Sandbox Basic' }).click();await expect(page.locator('body')).toContainText('Bootstrap Dropdown Practice');
});
