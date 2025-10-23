import { test } from '@playwright/test';

test('open google and resilion and print titles', async ({ page }) => {

    // Open Google and print title
    await page.goto('http://www.google.com');
    const googleTitle = await page.title();
    console.log('Google page title:', googleTitle);

    // Open Resilion and print title
    await page.goto('https://www.resilion.com/');
    const resilionTitle = await page.title();
    console.log('Resilion page title:', resilionTitle);
});

