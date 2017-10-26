import React from 'react';

import {
    View,
    Text
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Foundation';
import { Button } from 'react-native-elements';

const LogoWithButton = (props) => {
    return (
        <View style={styles.container}>

            <Icon style={styles.logo} name='foot' size={90} color='white' />
            <Button
                style={styles.button}
                raised
                iconRight={true}
                icon={{name: 'chevron-right', size: 20, type: 'octicon'}}
                buttonStyle={{backgroundColor: styles.$buttonColor, borderRadius: 1}}
                textStyle={{textAlign: 'center'}}
                title={props.title}
                onPress={props.onPress}
            />
        </View>
    )
};

LogoWithButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string
};

const mapStateToProps = (state) => ({
    mainText: state.main.mainText
});

export default connect(mapStateToProps)(LogoWithButton);
