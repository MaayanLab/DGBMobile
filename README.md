Instructions:

To run locally:
iOS -
1) Ensure XCode is installed.
2) Run `npm install`
3) Run `react-native run-ios`

Android -
1) Ensure an Android Emulator is installed. I recommend GenyMotion (You can create a free account).
2) Follow instructions here [https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html]
3) Run `react-native run-android`


Deployment:
iOS -
Once your version of app is ready for deployment (after testing including on physical device)
, we will launch the app in the App Store. This will require the lab iTunes Connect account
(speak with Avi or Sherry for this). We will deploy this app using XCode.

Please read the top answer for this StackOverflow post[https://stackoverflow.com/questions/34933439/how-to-build-react-native-ios-app-get-an-app-file-and-deploy-to-device].

Android -
We will generate an .apk file and upload it to the Play Store.
Generating .apk for Android

1) Be sure to update version in build.gradle
http://stackoverflow.com/questions/35924721/how-to-update-version-number-of-react-native-app
2) Update gradle.properties passwords but do not commit them.
pass hint: modified-lowercase-sysbio
3) cd android && ./gradlew assembleRelease
https://facebook.github.io/react-native/docs/signed-apk-android.html
4) Uninstall any previous versions of this app from Android emulator
5) Test with: react-native run-android --variant=release

*Note* We tried using CodePush (enables most deployments without having to attain
Apple/Google's approval each time), but it is buggy at the moment and not working
properly. So I've disabled it for now. Perhaps once it reaches a more stable
stage, we can reimplement it.

Important Docs:
1) https://facebook.github.io/react-native/releases/0.23/docs/getting-started.html
