/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'


import Home from '../pages/home'
import Detail from '../pages/detail'
import Header from '../components/header'


const route = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header title="Racing" />,
            headerStyle: {
                backgroundColor: 'red',

            }
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            headerTitle: () => <Header title="Racing" />,
            headerStyle: {
                backgroundColor: 'red',

            }
        }
    },

}

const HomeStack = createStackNavigator(route)

export default createAppContainer(HomeStack)