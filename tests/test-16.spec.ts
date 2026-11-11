import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').fill('Amarnath');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('PWtest@gmail.com');
  await page.getByTestId('email-input').press('Tab');
  await page.getByTestId('track-select').selectOption('Playwright Core');
  await page.getByText('Learner NameEmailTrackSelect').click();
  await page.getByTestId('remember-checkbox').check();
  await page.getByTestId('submit-form-btn').click();
  await expect(page.getByTestId('form-status')).toContainText('Amarnath submitted (PWtest@gmail.com) for Playwright Core.');
  await page.getByTestId('async-load-btn').click();
  await expect(page.getByTestId('async-status')).toContainText('Async:Async result loaded successfully.Completed');
  await page.getByTestId('keyboard-input').click();
  await page.getByTestId('keyboard-input').click();
  await page.getByTestId('keyboard-input').fill('Test');
  await page.getByTestId('keyboard-input').press('Enter');
  await expect(page.getByTestId('keyboard-status')).toContainText('Command submitted: Test');
  await expect(page.getByTestId('keyboard-status')).toContainText('Command submitted: Test');
});