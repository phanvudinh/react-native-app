import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { submitNewText } from '../../actions/main';

import {getAllUser, deleteUserById} from '../../actions/user'
import Swipeout from 'react-native-swipeout';

import Icon from 'react-native-vector-icons/FontAwesome';



class IconChanger extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    constructor (props) {
        super(props)
        this.renderRow = this.renderRow.bind(this)
        this.state = {
            swipeOpen: false,
            rowId: 0
        }
    }

    componentWillMount() {
        getAllUser(this.props.dispatch)
    }

    _deleteUser(user){
        this.setState({swipeOpen: false, rowId: 0})
        deleteUserById(this.props.dispatch, user.ID)
    }
    _swipeOpen(sectionID, rowId, direction){
        if(!this.state.swipeOpen && direction=="right") {
            this.setState({swipeOpen: true, rowId})
        }
    }

    _swipeClose(sectionID, rowId, direction){
        if(this.state.swipeOpen && direction=="right") {
            this.setState({swipeOpen: false, rowId: 0})
        }
    }
    _isDisable(rowId) {
        return this.state.swipeOpen && rowId !== this.state.rowId
    }
    renderRow(user) {
        const marginTop10 = {
            marginTop: 10 
        }

        const styleButton = {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
        }
        var swipeoutBtnRight = [
            
            {   
                backgroundColor: 'white',
                component: <TouchableHighlight key={user.ID} style={marginTop10} onPress={() => {this._deleteUser(user)}}>
                              <View style={[styleButton,{backgroundColor: 'red'}]}>
                                  <Text style={{color: 'white'}}>Delete</Text>
                              </View>
                           </TouchableHighlight>,
               close: true
               
              },
          ]

          var swipeoutBtnLeft = [
            { backgroundColor: 'white',
              component: <TouchableHighlight style={marginTop10} onPress={() => {console.log('click')}}>
                            <View style={[styleButton,{backgroundColor: 'gray'}]}>
                                <Text style={{color: 'white'}}>Detail</Text>
                            </View>
                         </TouchableHighlight>
            }
          ]

        const styleRow = {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
        }
        
        return (
            <Swipeout key={user.ID} rowId={user.ID} disabled={this._isDisable(user.ID)}
             onClose={(sectionID, rowId, direction) => this._swipeClose(sectionID, user.ID, direction)}
             onOpen={(sectionID, rowId, direction) => this._swipeOpen(sectionID, user.ID, direction)} style={{backgroundColor:'white'}} right={swipeoutBtnRight}>
                <TouchableOpacity style={marginTop10} onPress={() => {console.log('click')}}>
                    <View style={styleRow}>
                        <Icon name="star" size={20} color="red" />
                        <Text style={{color: 'black'}}>{user.name}</Text>
                    </View>
                </TouchableOpacity>
          </Swipeout>
        )
      }
    
    render(){
        const {users} = this.props
        let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        return(
            <View style={styles.container}>
                <ListView style={{backgroundColor:'white'}}
                    dataSource={ds.cloneWithRows(users)}
                    renderRow={(user) => this.renderRow(user)}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => { 
    return{
        users: state.user
    }
};

export default connect(mapStateToProps)(IconChanger);