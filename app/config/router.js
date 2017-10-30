import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Start from '../screens/Start';
import UI from '../screens/UI';

const DrawerScreen = DrawerNavigator(
    {
        UI: {
            screen: UI
        },
        Start: {
            screen: Start
        }
    },
    {
      drawerPosition: 'left',
      initialRouteName: 'UI',
    }
  )

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null
            }

        },
        Start: {
            screen: Start,
            navigationOptions: {
                headerTitle: 'Users'
            }
        },
        DrawerScreen: {
            screen: DrawerScreen
        }
    },
    {
        headerMode: 'none',
        mode: 'card'
    }
)
