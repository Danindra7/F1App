/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Detail({ navigation }) {
    return (
        <View style={styles.wrapper}>
            {/* <Text> {navigation.getParam('country')} </Text> */}
            <View style={{ height: '40%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 50, width: 80, borderRadius: 10 }} source={{ uri: navigation.getParam('flag') }} />
                    <View>
                        <Text>{navigation.getParam('country')} 2021</Text>
                        <Text>{navigation.getParam('circuitName')}</Text>
                    </View>
                </View>
                <Image style={{ height: '70%', width: '100%' }} source={{ uri: navigation.getParam('cicuitImg') }} />
            </View>

            {/* content */}
            <View style={{ height: '60%' }}>
                <View style={styles.testBorder}>
                    <Text style={styles.textTitle} >Circuit Lenght</Text>
                    <Text> <Text style={{ fontSize: 25 }}>{navigation.getParam('circuitLength')}</Text> KM</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.testBorderRow}>
                        <Text style={styles.textTitle}>No. of laps</Text>
                        <Text style={{ fontSize: 25 }}>{navigation.getParam('laps')}</Text>
                    </View>
                    <View style={styles.testBorderRow}>
                        <Text style={styles.textTitle}>First Grand Prix</Text>
                        <Text style={{ fontSize: 25 }}>{navigation.getParam('firstGP')}</Text>
                    </View>
                </View>
                <View style={styles.testBorder}>
                    <Text style={styles.textTitle} >Race distance</Text>
                    <Text> <Text style={{ fontSize: 25 }}>{navigation.getParam('distance')}</Text> KM</Text>
                </View>
                <View style={styles.testBorder}>
                    <Text style={styles.textTitle} >Circuit Lenght</Text>
                    <Text> <Text style={{ fontSize: 25 }}>{navigation.getParam('circuitLength')}</Text> KM</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    testBorder: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#e5e5e5'
    },
    testBorderRow: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#e5e5e5',
        flex: 1, marginRight: 5,
    },
    wrapper: {
        margin: 10,
    },
    circuitLength: {
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRightColor: 'red',
        borderBottomColor: 'red',
    },
    textTitle: {
        fontSize: 20,
        color: 'gray'
    }
})
