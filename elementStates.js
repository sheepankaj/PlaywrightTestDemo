const { chromium } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://demoqa.com/automation-practice-form');

    //print the element state
    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());

    //closing the browser
    await browser.close();
})();