class BasePage{
    constructor(page){
        this.page = page;
    }
    /**
     * Method to navigate to URl
     */
    async navigate(){
        await this.page.goto('https://demo.applitools.com/')
    }
}
module.exports = BasePage;