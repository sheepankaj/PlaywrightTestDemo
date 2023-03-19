const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 12'];

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    const context = await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude: 19.432608, longitude: -99.133209},
        locale: 'fr-FR'

    });
    //creating a page inside browser
    const page = await context.newPage();
    //navigating to the site
    await page.goto('https://google.com/maps');
    await page.waitForTimeout(200);

    //closing the browser
    await browser.close();
})();