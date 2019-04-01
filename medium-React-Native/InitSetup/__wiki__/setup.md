init setup

follow the [React Native getting-started Docs](https://facebook.github.io/react-native/docs/getting-started)

### **TLDR**

> ### Commands
>
> > #### Installing dependencies
> >
> > `brew install node`
> >
> > `brew install watchman`
>
> ### XCode
>
> > install the XCode Command Line Tools
> >
> > `npm install -g react-native-cli`
> >
> > `react-native init AwesomeProjectName`

## Directory Architecture

I put a lot of thought into this architecture to make it easy to find things. It may look like a lot but every path has a purpose.

```
┌── __tests__
├── __wiki__
├── android/
├── ios/
├── src/
│    ├── assets/
│    │      ├── fonts/
│    │      ├── icons/
│    │      ├── images/
│    │      └── videos/
│    ├── components/
│    │      ├── ...
│    │      └──  index.js
│    ├── navigation/
│    │      ├── AppStack/
│    │      │      ├── AnalyticsTab/
│    │      │      ├── ProfileTab/
│    │      │      └── index.js
│    │      ├── AuthStack/
│    │      ├── AppNavigator.js
│    │      └── index.js
│    ├── screens/
│    │      ├── Analytics/
│    │      │      ├── AnalyticsViewOne/
│    │      │      ├── AnalyticsViewTwo/
│    │      │      └── index.js
│    │      ├── LoadingScreen/
│    │      ├── Login/
│    │      ├── Profile/
│    │      │      ├── ProfileViewOne/
│    │      │      ├── ProfileViewTwo/
│    │      │      └── index.js
│    │      └── Settings/
│    │      │      ├── SettingsViewOne/
│    │      │      ├── SettingsViewTwo/
│    │      │      └── index.js
│    ├── services/
│    ├── utils/
│    └── index.js
├── index.js
```
