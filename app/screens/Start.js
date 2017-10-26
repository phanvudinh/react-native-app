import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { IconChanger } from '../components/IconChanger';

class Start extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <IconChanger />
            </View>
        )
    }
}

export default Start;