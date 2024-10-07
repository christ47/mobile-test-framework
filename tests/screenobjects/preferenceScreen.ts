class PreferenceScreen {

    async clickPreferenceTab(){
        await $("accessibility id:Preference").click();
    }

    async clickDefaultTab(){
        await $("accessibility id:4. Default values").click();        
    }

    async clickDefaultCheckbox(){
        const el13 = await driver.$("id:android:id/checkbox");
        await el13.click();
    }
    
    async clickTextArea(){
        await $("-android uiautomator:new UiSelector().className(\"android.widget.RelativeLayout\").instance(1)").click();
    }

    async clearTextArea(){
        await $("id:android:id/edit").clearValue();
    }

    async typeInTextArea (text :string) {
        $("id:android:id/edit").addValue(text);
    }

    async saveButtonOnTextArea (){
        await driver.$("id:android:id/button1").click();
    }

    get preferenceTextBox() { return $('~edit')}

}

export default new PreferenceScreen()