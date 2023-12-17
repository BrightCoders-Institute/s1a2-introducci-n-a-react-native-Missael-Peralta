import React from 'react'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import { ContadorScreen } from '../screens/ContadorScreen';
import { HolaMundoScreen } from '../screens/HolaMundoScreen';
import { StackScreen } from '../screens/StackScreen';


const HomeStackNavigation = createStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigation.Navigator
        initialRouteName='Hello'
        
        >
            <HomeStackNavigation.Screen
            name='Hello'
            component={HolaMundoScreen}
            />
            <HomeStackNavigation.Screen
            name='Stack'
            component={StackScreen}
            />
        </HomeStackNavigation.Navigator>
    )
}


const Tab = createBottomTabNavigator(); 

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName='Hello'
        screenOptions={{
            tabBarActiveTintColor: 'purple'
        }}
        >
            <Tab.Screen
             name="Hello" 
             component= {MyStack}
             options={{
                tabBarLabel: 'Feed', 
                tabBarBadge: 3,
                headerShown: false, 
             }}
             />
            <Tab.Screen 
            name="Count" 
            component= {ContadorScreen}
            options={{
                tabBarBadge: 10,
                headerShown: false, 
             }}
            />
        </Tab.Navigator>

    );
};

export default function Navigation() {
    return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
    );
};