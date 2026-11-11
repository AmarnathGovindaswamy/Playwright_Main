import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.goto('about:blank');
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByTestId('extract-textcontent-target').click();
  await expect(page.getByTestId('extract-textcontent-target')).toContainText('TextContent target visible text hidden text for textContent check');
  await page.getByTestId('extract-inputvalue-target').click();
  await page.getByTestId('extract-inputvalue-target').click();
  await page.getByTestId('extract-inputvalue-target').click();
  await page.getByTestId('extract-attribute-target').click();
  await page.getByTestId('extract-attribute-target').click();
  await page.getByTestId('extract-attribute-target').click();
  await expect(page.getByTestId('extract-list')).toContainText('API module item hidden-api');
  await page.getByText('UI module item hidden-ui').click();
  await expect(page.getByTestId('extract-list')).toContainText('UI module item hidden-ui');
  await page.getByText('CI module item hidden-ci').click();
  await expect(page.getByTestId('extract-list')).toContainText('CI module item hidden-ci');
  await page.getByTestId('mark-readops-btn').click();
  await page.getByTestId('mark-readops-btn').click();
  await page.getByText('Read operation checks').click();
  await expect(page.getByTestId('readops-status')).toContainText('Read operation checks completed.');
});