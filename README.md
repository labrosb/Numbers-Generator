# Numbers-Generator

Numbers-Generator is a Mobile App developed with React Native via Expo.
The project is kept in expo for easier testing in different devices.

## Run on Device - Expo
To run the project you should have npm, node in your machine. Assuming that you have them, follow the steps below to run the app
- Install expo: In your pc, open a terminal (cmd) and run 'npm install -g expo-cli'.
- Clone or download the current repo.
- Install the project dependencies: From the terminal, navigate to the root folder of the current project and run 'npm install'.
- Run on device (android/ios): Run 'expo start --android' if you want to run the device for android or 'expo start --ios', for ios.
- Install expo mobile app: Download expo app to your mobile device via play store / apple store and install to your device.
- Open your expo mobile app and scan with it the barcode that appears in the terminal window.

## Run on simulator - Android
- Download and install Android Studio: https://developer.android.com/studio/.
- Open Android studio and create an AVD: https://developer.android.com/studio/run/managing-avds.
- Follow the steps in the "Run on Device" section, except for the last two.

## Run on simulator - Ios (macOS only)
- Download and install Xcode: https://developer.android.com/studio/
- Install Xcode Command Line Tools: Open Xcode, choose "Preferences". Go to the Locations panel and install the tools.
- Follow the steps in the "Run on Device" section, except for the last two.

## Run unit tests
The unit testing is made using jest and enzyme.
- Navigate to the root of the project and run 'npm run tests'

* Due to a bug with jest-expo unit testing in projects using the latest expo and jest-expo versions is not possible.
to work around this issue the jest-expo project dependency points to the temporary custom repository labrosb/expo-jest-temp in which I resolved the issue.
