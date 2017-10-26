import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

import {getAllUser, deleteUserById} from '../actions/user'
import { IconChanger } from '../components/IconChanger';
import { Button, Divider, Header, Icon, List, ListItem  } from 'react-native-elements'


class LeftComponent extends Component {

    render(){
        const {navigate} = this.props.navigation
        return  <TouchableOpacity onPress={() => {navigate('DrawerToggle')}}>
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='white'
                        size={30}/>
                </TouchableOpacity>
    }
}

class UI extends Component {
    
    componentWillMount(){
        getAllUser(this.props.dispatch)
    }

    render() {
        let users = this.props.users
        console.log(users)
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <Header backgroundColor="#ff5722"
                    leftComponent={<LeftComponent {...this.props}/>}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }} 
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={{marginTop:70}}>
                    <ScrollView>
                        <List>
                            {
                                users.map((user, i) => (
                                <ListItem
                                    roundAvatar
                                    avatar={{uri:user.avatar}}
                                    key={user.ID}
                                    hideChevron= {true}
                                    title={user.name}
                                />
                                ))
                            }
                        </List>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    btn1: {
        backgroundColor: '#9C26B0',
        marginTop: 5
    },
    btn2: {
        backgroundColor: '#2096F3',
        marginTop: 5        
    },
    btn3: {
        backgroundColor: '#009588',
        marginTop: 5        
    },
    btn4: {
        backgroundColor: '#8AC24A',
        marginTop: 5
    },
    btn5: {
        backgroundColor: '#FF5722',
        marginTop: 5        
    }
})
const mapStateToProps = (state) => { 
    return{
        users: state.user
    }
};

export default connect(mapStateToProps)(UI);
