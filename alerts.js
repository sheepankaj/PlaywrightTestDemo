const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://demoqa.com/alerts');
    //code to handle alerts
    page.once('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');

    page.once('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });

    await page.click('#promtButton');

    //closing the browser
    await browser.close();
})();