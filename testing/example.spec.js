// @ts-check
const { test, expect } = require('@playwright/test');


// test.describe.configure({mode: 'serial'})

// Scenario - 1
// When Worker is 1 and fullyParallel = true - 1 test case at a time

// Scenario - 2
// When Worker is 1 and fullyParallel = false - 1 test case at a time

// Scenario -3 
// When Worker is 5 and fullyParallel = true - 5 test cases at a time

// Scenario - 4
// When Worker is 5 and fullyParallel = false - 5 different files will start execution at the same

// fixture
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Playwright' })).toBeVisible();
});


// Javascript is an asynchronous programming language

