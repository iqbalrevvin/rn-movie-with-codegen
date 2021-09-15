import React from 'react'
import {StyleSheet, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/Home/HomeScreen';
import PlaygroundScreen from '../Screens/Playgrounds/PlaygroundScreen'
import ProfileScreen from '../Screens/Profiles/ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../Services/Constant';

const screenOptionsConfig = ({ navigation, route }) => ({
    tabBarStyle:{
        height: 55,
        padding:10,
        borderTopColor: 'transparent',
        backgroundColor:'#15141F'
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor:'white',
    tabBarInactiveTintColor: 'ghostwhite',
    headerShown:false,
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        size = focused ? 25:30
        switch (route.name) {
            case 'Beranda':
                iconName = focused ? 'home' : 'home'
                break;
            case 'Playground':
                iconName = focused ? 'play' : 'play';
                break;
            default:
                iconName = focused ? 'user' : 'user'
        }
        return (
            <View style={styles.iconContainer(focused)}>
                <Icon name={iconName} size={size} style={!focused ? { color: 'gray'} : { fontSize: size, color: color, bottom:1 }} />
            </View>
        )
    }
})

const Tab = createBottomTabNavigator()

const TabNavigator = ({props}) => {
    return(
        <Tab.Navigator screenOptions={screenOptionsConfig}>
            <Tab.Screen name='Beranda' component={HomeScreen} {...props} />
            <Tab.Screen name='Playground' component={PlaygroundScreen} />
            <Tab.Screen name='Profil' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    iconContainer: (focused) => ({
        backgroundColor:focused?COLORS.primary:'transparent', 
        borderRadius:25, 
        padding:5, 
        marginTop:15,
        alignItems:'center', 
        justifyContent:'center', 
        width:85, 
        height: 45,
        bottom:focused?12:7
    })
})