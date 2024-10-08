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

    async checkAbolishIRS(){
        $("-android uiautomator:new UiSelector().resourceId(\"io.appium.android.apis:id/tasklist_finished\").instance(5)").click();        
    }

    async assertAboloishIrsTabIsChecked(){
        await expect ($("-android uiautomator:new UiSelector().resourceId(\"io.appium.android.apis:id/tasklist_finished\").instance(5)")).not.toBeChecked()        
    }

    async clickAccessibilityNodeQueryingTab(){
        await $("accessibility id:Accessibility Node Querying").click();        
    }
}



export default new AppScreen()