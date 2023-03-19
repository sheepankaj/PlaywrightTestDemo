const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    await page.click('#accept-choices');
    //validate 2nd checkbox ticked and 1st unticked
    const checkboxs = await page.$$('#main div:nth-child(1) > input[type=checkbox]');
    await checkboxs[1].check();
    await checkboxs[0].uncheck();
    //validate 2nd radio button ticked and 1st unticked

    const radiobuttons = await page.$$('#main div:nth-child(1) > input[type=radio]');
    await radiobuttons[1].check();
    await radiobuttons[0].uncheck();

    await browser.close();
})();