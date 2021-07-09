# Groups Recover Together
## Prerequiesites

This are the prerequisites for running this React Native project:
- node version 16.4.1 or greater
- latest XCode version and command line tools
- ruby and cocoapods version 1.10.1
- Android Studio with all platform tools in the path and java 8

## Installing prerequisites

### Node

Use [nvm](https://github.com/nvm-sh/nvm) to install the required `node` version.

Then run the following
```
nvm install 16.4.1
nvm use 16.4.1
```

### XCode

The easiest way to get XCode is from the App Store [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12). No reason for getting it somewhere else.

The install command line tools:

```
$ xcode-select --install
```

### Cocoapods

Use [rvm](https://github.com/rvm/rvm) to install the required `ruby` (any version should be good enough).

Then run the following to install cocoapods
```
sudo gem install cocoapods -v 1.10.1
```

### Install Android Studio

[Download Android Studio](https://developer.android.com/studio/index.html)

While installing it, make sure that the following boxes are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

After installation open android studio to finish the setup process.

The following varaibles need to be exported by your command line profile:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Java SDK

First things first. For android development java's JDK 8 or newer will be necessary. Using Android Studio's JDK should be enough. Remember to add it to path.

If you have no intention of using Android Studio's JDK and you have no JDK installed (greater or equal tha 8) you can install one using `Homebrew`

```
$ brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

## Getting Started

After cloning this repository, run
```
yarn install
```

This should install both all the node packages and pods.

### Setup the environment variables
This project takes environment variables for `production`, `staging` and `development`

Fill the required environment file `.env.{environment}` with the necessary information
as specified in `env.example`

## Guidelines
Use the following guides for getting things done, programming well, and
programming in style.
* [Style guide](https://github.com/airbnb/javascript)

## Running the Application
You can run the application in three different environments by using the scripts
defiend in `package.json`

```
yarn ios:dev
yarn ios:staging
yarn ios:prod

yarn android:dev
yarn android:staging
yarn android:prod
```

## Testing & Linting
We test our React application using [Jest](https://jestjs.io/docs/getting-started).
You can run all Jest tests with `yarn test` and run an individual Jest test with
`yarn test -t 'test pattern'`.

We use [eslint](https://github.com/eslint/eslint) for TS/React linting. You can run
`yarn lint` to lint the project. To autocorrect errors you should use
[Prettier](https://prettier.io/docs/en/install.html) and run it with
`yarn prettier --write .` or install it as a VSCode extension (Recommended).

## Building

The application can be built for both android and iOS.

### Building on XCode

The easiest way to build for iOS is to use XCode.
Select the production schema and build your app.

### Building on Android

You can either build by opening the project on Android Studio or going into the folder android and running

```
$ cd android
$ ./gradlew bundleRelease
```
