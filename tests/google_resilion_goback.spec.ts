import { test } from '@playwright/test';

test('open google and resilion and go back and print titles', async ({ page }) => {

    // Open Google and print title
    await page.goto('http://www.google.com');
    const googleTitle = await page.title();
    console.log('Google page title:', googleTitle);

    // Open Resilion and print title
    await page.goto('https://www.resilion.com/');
    const resilionTitle = await page.title();
    console.log('Resilion page title:', resilionTitle);

    // Go back and print title
    await page.goBack();
    const backTitle = await page.title();
    console.log('Back (previous) page title:', backTitle);

    // Close the browser explicitly
    const browser = page.context().browser();
    if (browser) {
        await browser.close();
    }
});

