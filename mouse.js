const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://paint.js.org/');
    
    await page.mouse.move(200,200);
    await page.mouse.down();
    await page.mouse.move(400,200);
    await page.mouse.move(400,400);
    await page.mouse.move(200,400);
    await page.mouse.move(200,200);
    await page.mouse.up();

    //closing the browser
    await browser.close();
})();