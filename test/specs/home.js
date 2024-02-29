// https://practice.sdetunicorns.com/
// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/about

import HomePage from "../pages/home-page.js";

describe('Home', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await HomePage.open();

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Open about page and validate url', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/about');

        // Assert title
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get started btn & assert url contains get-started text', async () => {
        // Open Home Page
        await HomePage.open();

        // Click get started button
        await HomePage.btnGetStarted.click();

        // Assert url contains get-started text
        await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
    });

    it('Click logo & assert url DOES NOT contain get-started text', async () => {
        // Open Home Page
        await HomePage.open();

        // Click logo btn
        await HomePage.imageLogo.click();

        // Assert url doesn't contain get-started text
        await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
    });

    it('Find heading element and assert the text', async () => {
        // open Home Page
        await HomePage.open();

        // find heading element
        const headingEl = await HomePage.txtHeading;

        // get text 
        const headingText = await headingEl.getText();

        // Assert the text
        await expect(headingText).toEqual('Think different. Make different.');
    });
});