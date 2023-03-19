const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://applitools.com/');
    //take screenshot
    await page.screenshot({path: 'screenshotApplitool.png'});

    const logo = await page.$('.logo');
    await logo.screenshot({path: 'screenshotLogo.png'});
    await page.screenshot({path: 'screenshotFullpage.png',fullPage:true});

    //closing the browser
    await browser.close();
})();