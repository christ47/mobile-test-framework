class AccessibilityScreen {
    async clickAccessibilityTab(){
        await $("accessibility id:Accessibility").click();
    }

    async clickAccessibilityServiceTab(){
        await $("accessibility id:Accessibility Service").click()
    }
}

export default new AccessibilityScreen()