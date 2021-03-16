import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from "expo-constants";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Restaurants from '../components/Restaurants';
import { Colors } from '../components/Colors';
import Icons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";



function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();


export default function Home() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: Colors.darkGreen,
                },
                labelStyle: {
                    color: Colors.white,
                    marginBottom: 5
                },
            }}

        >
            <Tab.Screen
                name="Restaurants"
                component={Restaurants}
                options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: () => (
                        <Icons name="restaurant" color={Colors.white} size={25} style={{ marginTop: 10 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icons name="favorite" color={Colors.white} size={25} style={{ marginTop: 13 }} />
                    ),
                }}
            />

            <Tab.Screen
                name="Recent"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <Icons name="watch-later" color={Colors.white} size={25} style={{ marginTop: 13 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        <FontAwesome name="user" color={Colors.white} size={25} style={{ marginTop: 13 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
});
