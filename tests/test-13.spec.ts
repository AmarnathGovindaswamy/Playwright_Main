import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced');
  await page.getByTestId('dynamic-group-select').selectOption('Locators');
  await page.getByTestId('dynamic-option-select').selectOption('role');
  await page.getByTestId('hidden-dropdown-toggle-btn').click();
  await page.getByTestId('hidden-dropdown-select').selectOption('Hidden - Interview');
  await page.getByText('Hidden dropdown selected:').click();
  await page.getByText('Hidden dropdown selected:').click();

  await page.getByText('Async result loaded').click();
  await page.getByText('API module item hidden-api').click();
  await page.getByText('API module item hidden-api').click();
});