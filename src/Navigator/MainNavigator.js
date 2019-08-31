import { createStackNavigator,
         createAppContainer,
         createDrawerNavigator } from 'react-navigation'

import Home from '../Screens/home'
import infoProfile from '../Screens/infoProfile'
import Profile from '../Components/Profile'
import BookDetail from '../Screens/bookDetail'
import DonateBook from '../Screens/donateBook'
import Login from '../Screens/Login' 
import Register from '../Screens/register';
import Search from '../Components/search'

const AppNavigator = createDrawerNavigator({
    Home,
    Profile,
    BookDetail,
    DonateBook,
    Login,
    Register,
    Search,
    
}, {
    headerMode: 'none',
    contentComponent: infoProfile,
    drawerWidth: 245
})

export default createAppContainer(AppNavigator)