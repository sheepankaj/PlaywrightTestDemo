const { chromium } = require('playwright');

(async ()=> {
    //function code
    const browser = await chromium.launch({headless:false, slowMo:500});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

    await browser.close();
})();