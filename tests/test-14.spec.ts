import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.getByTestId('single-click-btn').click();
  await page.getByTestId('double-click-btn').click();
  await page.getByTestId('hover-btn').click();
  await page.getByTestId('tooltip-trigger-btn').click();
  await page.getByTestId('static-practice-select').selectOption('Medium');
  await page.getByTestId('track-select').selectOption('CI/CD + Framework');
  await page.getByTestId('async-load-btn').click();
  await expect(page.getByTestId('async-status')).toContainText('Async:Loading async result...In Progress');
});