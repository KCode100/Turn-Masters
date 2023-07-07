# **Convert a web app into a mobile app and deploy to app stores!**

**Will it be a native app? **No

**Can it be any website? **Yes

**Is it easy to set up? **Yes

**Does it work on IOS and Android? **Yes

**Do I have to upload to app stores to use it? **No, you can export as an .APK and share it

**Does it work with frontend frameworks like React, Nextjs etc?** Yes, anything that “builds” into a static folder.

**What do I need to get started? **To preview the app in a native android/ios environment, you should have Android Studio and XCode simulators installed on your computer.

**How does it work?** “Capacitor” is a wrapper around the web pages and displays it in a native ”web view”. The site is hosted locally from the device, so all the pages/files are inside the mobile app’s code, so no need to deploy it on a static hosting provider. You can have backend functionality too by making requests from the frontend.


## **How to get started?**

In your codebase, make sure you have a directory which contains the static files and an index.html in the root of the folder.

If using React make sure to run “npm run build” to create a build directory. Same goes for Next.js

The directory does not need to be called “build”, it can be anything e.g. “public” “dist” etc.

Also make sure your package.json (if you have one) the value for the “homepage” property is “./”


```
"homepage": "./",
```


Run the following commands in the root of your codebase.

npm init @capacitor/app

npm i @capacitor/core

npm i -D @capacitor/cli

npx cap init

npm i @capacitor/android @capacitor/ios

**IMPORTANT:**

**In the capacitor.config.ts file you need to specify the name of the folder where your static web files are. webDir should match the name, like “build” or “out” or “dist” whatever it’s called in your case. In the following example, the files are in a folder called “build”**


```
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
appId: 'com.example.app',
appName: 'hangman',
webDir: 'build',
server: {
androidScheme: 'https',
// url: "https://any-website-over-here.com"
},
};

export default config;
```


**NOTE:**

**The server object has a “url” property option which is really meant for running local servers, but it can theoretically be used to deploy any website instead of the files from the webDir. In this case, the app will load the website called “any-website-over-here”**

**See [https://github.com/ionic-team/capacitor/discussions/4080](https://github.com/ionic-team/capacitor/discussions/4080) how some people do just use this option to wrap a pre-deployed website in a Capacitor app.**

**But if you do it that way REMEMBER that it will require internet connection to use, whereas if it’s located within the app as a regular capacitor build then it’ll be able to load static pages offline too.**

Then run these commands to add the android and ios projects

npx cap add android

npx cap add ios

**npm i @capacitor/app**

**This is important to make the back button work properly**

**NOTE:**

**With ios you may encounter this error**

**✖ Updating iOS native dependencies with pod install - failed!**

**✖ update ios - failed!**

**[error] [!] Unknown installation options: disable_input_output_paths.**

**To fix this go into the ios/App/Podfile and remove the following from line 7**


```
, :disable_input_output_paths => true
```


**So it should look like this:**


```
require_relative '../../node_modules/@capacitor/ios/scripts/pods_helpers'

platform :ios, '13.0'
use_frameworks!

# workaround to avoid Xcode caching of Pods that requires
# Product -> Clean Build Folder after new Cordova plugins installed
# Requires CocoaPods 1.6 or newer
install! 'cocoapods'

def capacitor_pods
pod 'Capacitor', :path => '../../node_modules/@capacitor/ios'
pod 'CapacitorCordova', :path => '../../node_modules/@capacitor/ios'

end

target 'App' do
capacitor_pods
# Add your Pods here
end

post_install do |installer|
assertDeploymentTarget(installer)
end
```


**Now when you run npx cap sync it should not throw any errors**

** **

Whenever you’ve made changes the the web project, make sure to run the following to update the android and ios projects too

**npx cap sync**

Now that you have the ios/android folders, let’s run them

To run the android project, run 

npx cap open android

And for ios run \
npx cap open ios

You can then run the projects on a simulator from the UI, or you can run \
npx cap run android

To export the app as an APK, go to build -> Build APK. Then locate the test apk file, usually called “app-debug.apk”, which you can use to test. For production there is a bit of a longer process.
