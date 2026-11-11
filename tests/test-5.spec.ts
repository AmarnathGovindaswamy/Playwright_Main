// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Recording...
//   await page.goto('https://playwright-mastery-academy-app.vercel.app/enroll');

//   await page.getByLabel('link', { name: 'block text-sm font-semibold text-white' }).click();


//   // Fill TestFiled ID
//   await page.getByTestId('link', { name:'enroll-urgency-timer' }).click();

//   //PlaceHolder Name 
//   await page.getByPlaceholder('link', { name:'Enter your name' }).click();
  
//   // Fill form fields
// await page.getByLabel('Full Name').fill('Amarnath');
// await page.getByLabel('Email').fill('Test@gmail.com');

// // Click a button by role and name
// await page.getByText('button', { name: '"enroll-submit-btn"' }).click();

// // Assert visibility
// await expect(page.getByText('Playwright Mastery Academy"!')).toBeVisible();

// await page.getByAltText('lawait page.getByText('Basic + Advanced Sandbox').click();ink', { name: 'Enroll Now' }).click();

// await page.locator('link', { name: 'Enroll Now' }).click();

// await page.getByRole('link', { name: 'Enroll Now' }).click();

// await page.getByText('link', { name: 'Enroll Now' }).click();



// });