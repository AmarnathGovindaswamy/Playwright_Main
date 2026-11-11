import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced');
  await expect(page.getByTestId('dynamic-group-select')).toContainText('Select groupLocatorsActionsWaits');
  await page.getByTestId('dynamic-group-select').selectOption('Locators');
  await expect(page.getByTestId('dynamic-option-select')).toBeVisible();
  await expect(page.getByTestId('dynamic-option-select')).toBeVisible();
  await page.getByTestId('dynamic-option-select').selectOption('role');
  await expect(page.getByTestId('dynamic-option-select')).toContainText('Select optiongetByRole + namegetByText + exactgetByTestId + filter');
  await expect(page.getByText('Hidden Dropdown Practice')).toBeVisible();
  await expect(page.getByTestId('hidden-dropdown-toggle-btn')).toBeVisible();
  await expect(page.getByTestId('hidden-dropdown-toggle-btn')).toBeVisible();
  await page.getByTestId('hidden-dropdown-toggle-btn').dblclick();
  await page.getByTestId('hidden-dropdown-toggle-btn').click();
  await expect(page.getByTestId('hidden-dropdown-select')).toContainText('Select hidden optionHidden - CoreHidden - AdvancedHidden - Interview');
  await expect(page.getByTestId('bootstrap-dropdown-trigger')).toBeVisible();
  await expect(page.getByTestId('bootstrap-dropdown-trigger')).toContainText('Select batch slotMenu');
  await expect(page.getByTestId('dynamic-dropdown-status')).toContainText('Dynamic dropdown selected: getByRole + name.');
  await expect(page.getByTestId('table-status')).toContainText('Dropdown:No dropdown action executed.Pending');
  await page.getByTestId('bootstrap-dropdown-trigger').click();
  await page.getByTestId('bootstrap-dropdown-item-weekend').click();
  await expect(page.getByTestId('table-status')).toContainText('Bootstrap dropdown selected: Weekend Batch.');
});