/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'



export default function RaceCard(props) {


    return (
        <View style={styles.wrapper} >
            <View style={styles.dateWrapper} >
                <Text>{props.date}</Text>
                <View style={styles.month} >
                    <Text>{props.month}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.round} >{props.round}</Text>
                <Text style={styles.country} >{props.country}</Text>
                <Text style={styles.desc} >{props.desc}</Text>
            </View>
            {/* <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => alert('yuhu')}> */}
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, color: 'red' }} > > </Text>
            </View>
            {/* </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        minHeight: 100,
        maxHeight: 200,
        marginBottom: 7,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    dateWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        // backgroundColor: 'aqua',
        // borderRightColor: 'black',
        // borderWidth: 1,
        // borderStyle: 'dashed',
        // borderRadius: 1,
    },
    month: {
        minWidth: 50,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        borderRadius: 10,
    },
    content: {
        // backgroundColor: 'lightgreen',
        justifyContent: 'center',
        width: 0,
        flexGrow: 1,
    },
    round: {
        color: 'red',
        fontSize: 16,
    },
    country: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    desc: {
        color: 'grey',
        flexWrap: 'wrap'
    }

})
