Loading time is optimized by making fetch immediately after selecting gene of interest
and letting it resolve as user clicks through expression and dataset screen.

However, navigation from dataset selection to results screen is tricky because of this.
Some logic for navigation from dataset selection to results is handled by MobX state. Part of the logic
is also handled as the fetch resolves (In the HomeScreen). In the future, I hope to
clean this logic up and make it more modular.

Building a release Android APK file.

1) Be sure to update version in build.gradle
http://stackoverflow.com/questions/35924721/how-to-update-version-number-of-react-native-app

2) Update gradle.properties passwords BE SURE NOT TO not commit them into git.

3) In the root folder of the app, in your terminal type
`cd android && ./gradlew assembleRelease`
https://facebook.github.io/react-native/docs/signed-apk-android.html

4) Your file should be within {app root}/android/app/outputs/apk/app-release.apk

5) Uninstall any previous versions of this app from Android emulator

6) Test with: react-native run-android --variant=release
