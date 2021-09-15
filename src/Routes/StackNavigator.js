import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from '../Screens/Welcome/WelcomeScreen'
import HomeScreen from '../Screens/Home/HomeScreen'
import MovieDetailScreen from '../Screens/MovieDetail/MovieDetailScreen'
import TabNavigator from './TabNavigator'

const screenOptionsConfig = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
}

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionsConfig} animation={true}>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Index' component={TabNavigator} />
            <Stack.Screen name='Detail' component={MovieDetailScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator