class AppScreen {

    async clickAccessibilityTab(){
        return await $("accessibility id:App").click()
    }

    async clickActivityTab (){
        return await $("accessibility id:Activity").click()
    }
    async clickWallpaper () { return await $("accessibility id:Wallpaper").click()}

    async ScrollToBottom(){
        await driver.action('pointer')
        .move({ duration: 0, x: 443, y: 1883 })
        .down({ button: 0 })
        .move({ duration: 1000, x: 477, y: 530 })
        .up({ button: 0 })
        .perform();
    }
}

export default new AppScreen()