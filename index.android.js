'use strict';

import React, {Component} from 'react';
import addons from 'react/addons';
import {ProgressBarAndroid} from 'react-native';

class Loader extends Component {

    static get defaultProps() {
        return {size: 'small'};
    }

    render() {
        var propsAndroid = this.props;
        if (this.props.size && !this.props.styleAttr) {
            var styleAttr = (this.props.size == 'large' ? 'Large' : 'Small');
            propsAndroid = addons.update(this.props, {$merge: {styleAttr}});
            delete propsAndroid.size;
        }
        return (<ProgressBarAndroid {...propsAndroid} />);
    }

}

Loader.propTypes = ProgressBarAndroid.propTypes;

export default Loader;
