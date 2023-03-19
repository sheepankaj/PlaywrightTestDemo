const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const context = await browser.newContext({
        recordVideo: {
            dir:"./recording"
        }
    });
    const page = await context.newPage();
    //navigating to the site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading',{ state: 'hidden' });
    await page.waitForTimeout(100);

    //closing the browser
    await browser.close();
})();