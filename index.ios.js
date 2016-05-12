'use strict';

import React, {Component} from 'react';
import {ActivityIndicatorIOS} from 'react-native';

class Loader extends Component {

    static get defaultProps() {
        return ActivityIndicatorIOS.getDefaultProps();
    }

    render() {
        return (<ActivityIndicatorIOS {...this.props}/>);
    }

}

Loader.propTypes = ActivityIndicatorIOS.propTypes;

export default Loader;
