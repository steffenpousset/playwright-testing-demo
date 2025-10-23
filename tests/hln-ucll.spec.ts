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

    // Term invullen en zoeken
    const searchInput = page.locator('input[type="text"]');
    await searchInput.fill('UCLL');
    await page.keyboard.press('Enter');
    console.log('Search term "UCLL" entered and search initiated');

    // Wacht tot resultaten verschijnen
    const firstResult = page.locator('a[data-category="teaser"]').first();
    const title = await firstResult.getAttribute('title');
    console.log('Eerste resultaat tekst:', title);
});