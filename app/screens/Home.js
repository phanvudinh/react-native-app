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
                <StatusBar barStyle="light-content" backgroundColor='#e0b826'/>
                <LogoWithButton onPress={() => this.props.navigation.navigate('Start')} />
            </View>
        )
    }
};

export default Home;