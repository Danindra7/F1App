/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Header from '../../components/header'
import RaceList from '../../components/raceList'

export default function Home(props) {

    const pressHandler = () => {
        props.navigation.navigate('Detail')
    }

    return (
        <View style={styles.wrapper}>
            {/* <Header></Header> */}
            <RaceList navigation={props.navigation} screenName={'Detail'} ></RaceList>
            {/* <Button title="detail" onPress={pressHandler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#E5E5E5',
        // minHight: 100
        height: '100%'
    }
})
