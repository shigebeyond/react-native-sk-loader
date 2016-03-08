# react-native-sk-loader

##What is it

react-native-sk-loader is a component that wrap ProgressBarAndroid in android and ActivityIndicatorIOS in iOS, is used to indicate that the app is loading

It’s very simple, I write it just for loading compatibility in different platform.

##How to use it

1. `npm install react-native-sk-loader@latest --save`

2. Write this in index.ios.js / index.android.js
```javascript
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  StyleSheet
} = React;
var SKLoader = require('react-native-sk-loader');

var test = React.createClass({
  render: function(){
    return (
      <SKLoader />
    )
  }
});

```

3. If you want to know more, just see the source code, is very simple
