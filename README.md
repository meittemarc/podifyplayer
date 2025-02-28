This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## PROJECT COMMANDS

npx @react-native-community/cli init podifyplayer
code podifyplayer
npx react-native start --reset-cache
npm install --save-dev babel-plugin-module-resolver
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
npx react-native start --reset-cache
npx react-native run-android
npm install formik --save
npm install yup --save
npm i react-native-vector-icons
npm i @types/react-native-vector-icons

# Reanimated

npm install react-native-reanimated
cd ios
pod install

# Navigation

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

configure react navigation, follow the guide

npm install @react-navigation/native-stack

# Typescript and .eslintrc

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=4.7.4 <5.6.0

YOUR TYPESCRIPT VERSION: 5.7.3

Please only submit bug reports when using the officially supported version.

# eslint

npm install --save-dev @typescript-eslint/parser@7.18.0 @typescript-eslint/eslint-plugin@7.18.0

Quel est la différence entre @react-native/eslint-config, @typescript-eslint/eslint, le fichier dans le code .eslintrc.js, le fichier .prettierrc.js, le message "WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree." quand lance sur le terminal npx eslint . --ext .js,.jsx,.ts,.tsx ?

npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin \
 eslint-plugin-react eslint-plugin-react-native eslint-plugin-import \
 eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-config-prettier prettier

# Gradle

cd android
./gradlew clean
./gradlew --stop
rm -rf app/build .gradle
cd ..
rm -rf node_modules package-lock.json
npm install
cd android
./gradlew assembleDebug
cd ..
npx react-native run-android

# Simulator

IOS
Run the following command in your terminal:

xcrun simctl shutdown booted
This will shut down the currently running iOS Simulator.

If you want to completely quit the Simulator app, use:
killall Simulator

ANDROID
If you started the emulator via the command line, you can shut it down using:
adb emu kill

adb devices # List running emulators
adb -s emulator-5554 emu kill # Replace `emulator-5554` with your emulator ID

To force close all emulators, use:
killall qemu-system-x86_64 # On macOS
taskkill /IM "qemu-system-x86_64.exe" /F # On Windows

# watch code

npx tsc --watch
