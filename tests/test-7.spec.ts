import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
  await page.getByRole('heading', { name: 'Interactive Playwright' }).click();
  await page.getByText('Clicks + Hover').click();
  await page.getByText('Inputs + Form').click();
  await page.getByText('Static Waits + Keyboard').click();
  await page.getByText('Text Extraction', { exact: true }).click();
  await page.getByTestId('name-input').click();
  await page.getByText('Email').click();
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').click();
  await page.getByTestId('track-select').selectOption('Playwright Core');
  await page.getByTestId('mode-api-radio').check();
  await page.getByTestId('mode-ui-radio').check();
  await page.getByText('Remember preference').click();
  await page.getByTestId('remember-checkbox').check();
  await page.getByTestId('async-load-btn').click();
  await page.getByTestId('static-practice-select').selectOption('Easy');
  await page.getByTestId('extract-attribute-target').click();
  await page.getByText('UI module item hidden-ui').click();
  await page.getByText('UI module item hidden-ui').click();
  await page.getByRole('link', { name: 'Locator Arena' }).click();
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Practice' }).click();
  await page.getByText('Network + Table Labs').click();
  await page.getByText('Basic + Advanced Sandbox').click();
  await page.getByText('Basic + Advanced Sandbox').click();
});