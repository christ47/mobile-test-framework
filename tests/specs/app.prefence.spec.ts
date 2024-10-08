import preferenceScreen from "../screenobjects/preferenceScreen.js";
describe('Test the preferences features', ()=>{

    it('should be able to uncheck the default features', async ()=>{
        preferenceScreen.clickPreferenceTab()
        preferenceScreen.clickDefaultTab()
        preferenceScreen.clickDefaultCheckbox()  
        await expect($("id:android:id/checkbox")).not.toBeChecked()
    })

    it('should be able to edit the default value of the text field', async()=>{
        await preferenceScreen.clickPreferenceTab()
        await preferenceScreen.clickDefaultTab()
        await preferenceScreen.clickTextArea()
        await preferenceScreen.clearTextArea()
        await preferenceScreen.typeInTextArea('Lions are my favourite animal')
        await preferenceScreen.saveButtonOnTextArea()
        await preferenceScreen.clickTextArea()
        expect(preferenceScreen.preferenceTextBox).toHaveText('Lions are my favourite animal')
})

})