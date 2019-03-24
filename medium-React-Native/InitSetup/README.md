# Init Setup
# React Native Boilerplate
## Overview
This is a React Native boilerplate setup with react-navigation, 

- [ ] React Native setup
- [ ] Directory Structure
- [ ] Dependencies & dev-dependencies
- [ ] Navigation setup
---

## Setup

follow the [React Native getting-started Docs](https://facebook.github.io/react-native/docs/getting-started)

### Commands

#### Installing dependencies

```
brew install node
brew install watchman
```

#### Xcode
  - install the Xcode Command Line Tools

#### The React Native CLI
 ```
 npm install -g react-native-cli
 ```
 Doesn’t work? You may need to add sudo at the beginning of the command.


#### Creating a new application
```
react-native init AwesomeProjectName
```

---

## Directory Structure

#### **I added the following directories**

```
cd /AwesomeProjectName && 
mkdir src && 
cd src/ && 
mkdir assets && cd assets/ mkdir fonts && mkdir icons && mkdir images && mkdir videos && cd .. && 
mkdir components && 
mkdir navigation && 
mkdir screens &&
mkdir services && 
mkdir utils &&
```

> add `.gitkeep` inside the empty directories you want to add to git

Current `src` file structure:
```
├── src
    ├── assets
    |    ├── fonts
    |    ├── icons
    |    ├── images
    |    └── videos
    ├── components
    ├── navigation
    ├── screens
    ├── services
    ├── utils
    └── index.js
```

All development files are placed in the `src` folder. The root file is `index.js`.

`src/services`: This folder contains logic related to external API communications, it includes:

`src/assets`: This houses static files (e.g images) used in the application.

`src/components`: Shared components used across features are placed in this directory

`src/navigation`: Used `react-navigation` to navigate between the screens.

`src/screens`: The `screen` folder, consists of folders for each of the application’s screens.

`src/utils`: Helper functions.

`__tests__`: jest testing config and setup

`__wiki__`: app wiki

---


## Screens Setup

### making test screens
Next, create two test screens inside the  screen directory.

```
cd screens/ && mkdir ViewOne && mkdir ViewTwo && 
cd ViewOne/ && touch index.js && cd .. && 
cd ViewTwo/ && touch index.js && ls
```

Current `screens` file structure:
```
├── screens
    ├── ViewOne
    ├    └── index.js
    └── ViewTwo
          └── index.js
```
We are going to add the following code in both `ViewOne/index.js` &  `ViewTwo/index.js`file to build a very simple view.

### `ViewOne/index.js`
```js
import React from "react";
import { View, Text} from "react-native";

export default class ViewOne extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: '#101D29', alignItems: "center", justifyContent: "center"}}>
          <Text>ViewOne Screen</Text>
        </View>
      </View>
    );
  }
}

```

### `ViewTwo/index.js`
```js
import React from "react";
import { View, Text } from "react-native";

export default class ViewTwo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#223040', alignItems: "center", justifyContent: "center"}}>
        <Text>ViewTwo Screen</Text>
      </View>
    );
  }
}
```

## Navigation setup

### Installing the dependencies

```
$ npm install --save react-navigation
$ npm install --save react-native-gesture-handler
```
**Link** react-native-gesture-handler: 
> follow the steps in 
[react native manual linking](https://facebook.github.io/react-native/docs/linking-libraries-ios)


Next, create the index file in the Navigation directory.

```
$ cd navigation/  && touch index.js
```

We are going to add the following code in our `navigation/index.js` file to build a very simple nav.

```js
import { createStackNavigator, createAppContainer } from "react-navigation";
import ViewOne from '../screens/ViewOne';
import ViewTwo from '../screens/ViewTwo';

const RootStack = createStackNavigator(
  {
    ViewOneScreen: ViewOne,
    ViewTwoScreen: ViewTwo
  },
  {
    initialRouteName: "ViewOneScreen",
  }
);

export default createAppContainer(RootStack);

```



