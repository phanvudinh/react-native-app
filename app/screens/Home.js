import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import PropTypes from 'prop-types';

import { LogoWithButton } from '../components/LogoButton';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#e0b826'}}>
                <LogoWithButton title={'Start'} onPress={() => this.props.navigation.navigate('Start')} />
                <LogoWithButton title={'UI'} onPress={() => this.props.navigation.navigate('UI')} />
            </View>
        )
    }
};

export default Home;
