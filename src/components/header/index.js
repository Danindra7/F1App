/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'


export default function Header(props) {
    return (
        <View style={styles.header} >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{props.title}</Text>
            <View style={styles.headerIcon} >
                <Text style={{ color: 'white' }}>ICON</Text>
                {/* <Icon name="user" size={40} color="white" /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        // position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header1: {
        // backgroundColor: 'red',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // // // padding: 20,
        // // height: 80,
        // position: 'relative',
        // color: 'white'
    },
    headerIcon: {
        position: 'absolute',
        right: 0,
        // top: 20,
    }
})
