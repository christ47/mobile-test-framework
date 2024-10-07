import AppScreen from "../screenobjects/AppScreen.js";
describe('App test cases for API Demo',()=>{
    it('should be able to access the wallpaper options', async ()=>{
        await AppScreen.clickAccessibilityTab()
        await AppScreen.clickActivityTab()
        await AppScreen.ScrollToBottom()
        await AppScreen.clickWallpaper()
        await expect($('accessibility id:Example of how you can make an activity have a translucent background, compositing over whatever is behind it.')).toBeDisplayed()
    })
})
