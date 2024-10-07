import AccessibilityScreen from "../screenobjects/accessibilityScreen.js";
describe('Test the accessibility features', ()=>{
    it('should ensure Accessibility Security page has the correct text', async()=>{
        await AccessibilityScreen.clickAccessibilityTab()
        await AccessibilityScreen.clickAccessibilityServiceTab()
        await expect( $('accessibility id:1. Enable TalkBack (Settings -> Accessibility -> TalkBack). \n\n2. Enable Explore-by-Touch (Settings -> Accessibility -> Explore by Touch). \n\n3. Touch explore the Clock application and the home screen. \n\n4. Go to the Clock application and change the time of an alarm. \n\n5. Enable ClockBack (Settings -> Accessibility -> ClockBack). \n\n6. Go to the Clock application and change an alarm. \n\n7. Set the ringer to vibration mode and change an alarm. \n\n8. Set the ringer to muted mode and change an alarm.')).toBeDisplayed()
    })

})


