'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} = React;
var merge = require(('merge'));

// 加载器
var Loader = React.createClass({
  getDefaultProps: function(){
    return {size: 'small'};
  },
  render: function(){
    if(Platform.OS === 'ios'){
      return (<ActivityIndicatorIOS {...this.props}/>);
    }

    // 兼容android api
    // 以ActivityIndicatorIOS的api来调用，兼容ProgressBarAndroid的api
    var propsAndroid = this.props;
    if(this.props.size && !this.props.styleAttr){ // 只处理size属性
      var styleAttr = (this.props.size == 'large' ? 'Large' : 'Small');
      propsAndroid = merge(this.props, {styleAttr});
      delete propsAndroid.size;
    }
    return (<ProgressBarAndroid {...propsAndroid} />);
  }
});

module.exports = Loader;
