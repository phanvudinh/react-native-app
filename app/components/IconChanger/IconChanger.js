import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ListView,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { submitNewText } from '../../actions/main';

import {getAllUser} from '../../actions/user'

import Swipeable from 'react-native-swipeable';

class IconChanger extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    constructor (props) {
        super(props)
        this.renderRow = this.renderRow.bind(this)
    }

    componentWillMount() {
        getAllUser(this.props.dispatch)
    }

    renderRow(user) {
        const leftContent = <Text>Pull to activate</Text>;
        
        const rightButtons = [
          <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
          <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
        ];
        
        return (
                <Text>{user.name}</Text>
        )
      }
    
    render(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const {users} = this.props
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={ds.cloneWithRows(users)}
                    renderRow={(user) => this.renderRow(user)}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => { 
    console.log(state)
    return{
        users: state.user
    }
};

export default connect(mapStateToProps)(IconChanger);