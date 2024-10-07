import preferenceScreen from "../screenobjects/preferenceScreen.js";
describe('Test the preferences features', ()=>{

    it('should be able to uncheck the default features', async ()=>{
        preferenceScreen.clickPreferenceTab()
        preferenceScreen.clickDefaultTab()
        preferenceScreen.clickDefaultCheckbox()  
        await expect($("id:android:id/checkbox")).not.toBeChecked()
    })

})