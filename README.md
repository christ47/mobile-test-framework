# Mobile Testing App Framework

This Framework is written in Typescript. It uses Appium and WebDriverIO for local Mobile testing.
This app does not require a running Appium server to execute test.
The test are set to run on a Real Android Device.

## Installation

1. Install all dependencies
```sh
npm install
```

2. Install Appium to your local device. This can be done using [appium-installer](https://github.com/AppiumTestDistribution/appium-installer) 

3. Connect your android device. A widely used method for this is [ADB](https://developer.android.com/tools/adb)

4. Download the [APK](https://github.com/tarun3kumar/appium-tests/blob/master/sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk) file and add it to the folder './apps'

5. Adjust the configuration file for your device

6. Run tests locally
```sh
    npm run android.app
```