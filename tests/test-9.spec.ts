import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByText('Clicks + Hover').click();
  await page.getByTestId('single-click-btn').click();
  await page.getByTestId('double-click-btn').click();
  await page.getByTestId('hover-btn').click();
  await page.getByTestId('tooltip-trigger-btn').click();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').fill('test');
  await page.getByTestId('name-input').press('Tab');
  await page.getByTestId('email-input').fill('test@gmail.com');
  await page.getByTestId('track-select').selectOption('CI/CD + Framework');
  await page.getByText('Remember preference').click();
  await page.getByTestId('remember-checkbox').check();
  await page.getByTestId('remember-checkbox').dblclick();
  await page.getByTestId('remember-checkbox').dblclick();
  await page.getByTestId('remember-checkbox').check();
  await page.getByTestId('submit-form-btn').click();
  await expect(page.getByRole('heading', { name: 'Inputs, Checkbox, Radio,' })).toBeVisible();
  await expect(page.getByTestId('name-input')).toBeVisible();
  await expect(page.getByTestId('email-input')).toBeVisible();
  await expect(page.getByTestId('track-select')).toBeVisible();
  await expect(page.getByTestId('submit-form-btn')).toBeVisible();
});