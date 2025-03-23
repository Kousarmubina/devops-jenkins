const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
    await driver.get('file://' + __dirname + '/index.html');

        await driver.findElement(By.id('clickMe')).click();
        let message = await driver.findElement(By.id('message')).getText();
        console.log(message); // Should print "Button Clicked!"
    } finally {
        await driver.quit();
    }
})();
