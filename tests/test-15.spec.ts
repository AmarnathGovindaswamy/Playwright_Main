import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByTestId('single-click-btn').click();
  await expect(page.getByTestId('single-click-status')).toContainText('Single click completed.');
  await page.getByTestId('double-click-btn').dblclick();
  await expect(page.getByTestId('double-click-status')).toContainText('Double click completed.');
  await expect(page.getByTestId('hover-status')).toContainText('Hover triggered successfully.');
  await expect(page.locator('body')).toContainText('Single ClickDouble ClickHover TargetTooltipTooltip verified');
  await expect(page.getByTestId('hover-tooltip-status')).toContainText('Tooltip verified successfully.');
  await page.getByTestId('static-practice-select').selectOption('Easy');
  await expect(page.getByTestId('static-practice-select')).toContainText('Select practice levelEasy - Basic locator targetingMedium - Filter and chainingHard - Dynamic waits and assertions');
});