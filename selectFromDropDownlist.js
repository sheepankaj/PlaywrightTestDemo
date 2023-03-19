const { chromium } = require('playwright');

(async ()=> {
    //function code
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    //select by value
    await dropdown.selectOption({value: '1'});
    //select by label
    await dropdown.selectOption({label: 'Option 2'});
    //select by index
    await dropdown.selectOption({index: 1});

    //values inside this select
    const availableOptionsString = await dropdown.$$('option');
    for(let i=0; i< availableOptionsString.length; i++)
    {
        console.log(await availableOptionsString[i].innerText());
    } 

    await browser.close();
})();