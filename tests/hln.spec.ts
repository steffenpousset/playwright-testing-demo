import { test } from '@playwright/test';

test('HLN search test', async ({ page }) => {
    await page.goto('https://www.hln.be');

    // Cookies accepteren
    const acceptBtn = page.locator('button:has-text("Akkoord")');
    if (await acceptBtn.isVisible()) {
        await acceptBtn.click();
        console.log('Cookies accepted');
    }

    // Zoekknop aanklikken
    await page.click('a[aria-label="Zoeken"]');
    console.log('Search button clicked');

});