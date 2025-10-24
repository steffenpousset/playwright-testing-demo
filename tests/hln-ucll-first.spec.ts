import { test } from '@playwright/test';

test('HLN search test', async ({ page }) => {
    await page.goto('https://www.hln.be', { waitUntil: 'domcontentloaded' });

    // Cookies accepteren
    const acceptBtn = page.locator('button:has-text("Akkoord")');
    try {
        await acceptBtn.waitFor({ state: 'visible', timeout: 5000 });
        await acceptBtn.click();
        console.log('Cookies accepted');
    } catch (error) {
        console.log('Cookie banner not shown or already accepted');
    }

    // Zoekknop aanklikken
    const searchButton = page.locator('a[aria-label="Zoeken"]').first();
    await searchButton.waitFor({ state: 'visible', timeout: 10000 });
    await searchButton.click();
    console.log('Search button clicked');

    // Wacht tot search input verschijnt
    const searchInput = page.locator('form[name="search-form"] input[type="text"]');
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });

    // Extra delay om te zorgen dat alles klaar is
    await page.waitForTimeout(2000);

    // Vul zoekterm in
    await searchInput.clear();
    await searchInput.fill('UCLL');
    await searchInput.press('Enter');

    console.log('Search term "UCLL" entered');

    // Wacht op zoekresultaten te laden (langere timeout)
    await page.waitForTimeout(5000);

    // Wacht tot resultaten verschijnen
    const firstResult = page.locator('a[data-category="teaser"]').first();
    await firstResult.waitFor({ state: 'visible', timeout: 15000 });
    const title = await firstResult.getAttribute('title');
    console.log('Eerste resultaat titel:', title);

    // Klik op eerste resultaat
    await firstResult.click();

    // Page title tonen
    console.log('Nieuwe pagina titel:', await page.title());

});