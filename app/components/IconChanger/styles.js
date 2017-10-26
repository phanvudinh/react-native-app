import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const inputWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
