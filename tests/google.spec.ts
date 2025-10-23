import { test } from '@playwright/test';

test('open google and print title', async ({ page }) => {
	await page.goto('http://www.google.com');
	const title = await page.title();
	console.log('Page title:', title);
});

