/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Detail({ navigation }) {
    return (
        <View style={styles.wrapper}>
            {/* <Text> {navigation.getParam('country')} </Text> */}
            <View style={{ height: '40%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image style={{ height: 50, width: 80, borderRadius: 10, marginRight: 10 }} source={{ uri: navigation.getParam('flag') }} />
                    <View>
                        <Text>{navigation.getParam('country')} 2021</Text>
                        <Text>{navigation.getParam('circuitName')}</Text>
                    </View>
                </View>
                <Image style={{ height: '70%', width: '100%' }} source={{ uri: navigation.getParam('cicuitImg') }} />
            </View>

            {/* content */}
            <View style={{ height: '60%' }}>
                <View style={styles.testBorderTop}>
                    <View style={{ position: 'relative', left: -8 }} >
                        <Text style={styles.textTitle} >Circuit Length</Text>
                        <Text> <Text style={styles.dataText}>{navigation.getParam('circuitLength')}</Text> KM</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.testBorderRow}>
                        <Text style={styles.textTitle}>No. of laps</Text>
                        <Text style={styles.dataText}>{navigation.getParam('laps')}</Text>
                    </View>
                    <View style={styles.testBorderRow}>
                        <Text style={styles.textTitle}>First Grand Prix</Text>
                        <Text style={styles.dataText}>{navigation.getParam('firstGP')}</Text>
                    </View>
                </View>
                <View style={styles.testBorder}>
                    <Text style={styles.textTitle} >Race distance</Text>
                    <Text> <Text style={styles.dataText}>{navigation.getParam('distance')}</Text> KM</Text>
                </View>
                <View style={styles.testBorder}>
                    <Text style={styles.textTitle} >Lap Record</Text>
                    <Text style={styles.dataText}>{navigation.getParam('record')}</Text>
                    <Text style={{ color: 'gray', fontWeight: 'bold', marginTop: 0, }} > {navigation.getParam('racerRecord')} </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    testBorderTop: {
        borderWidth: 10,
        borderRadius: 10,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'red',
        borderRightColor: 'red',
        position: 'relative',
        marginBottom: 10,

    },
    testBorder: {
        borderWidth: 2,
        borderRadius: 10,
        borderTopColor: 'transparent',
        borderRightColor: '#BABABA',
        borderBottomColor: '#BABABA',
        borderLeftColor: 'transparent',
        marginBottom: 10,
    },
    testBorderRow: {
        borderWidth: 2,
        borderRadius: 10,
        borderTopColor: 'transparent',
        borderRightColor: '#BABABA',
        borderBottomColor: '#BABABA',
        borderLeftColor: 'transparent',
        flex: 1, marginRight: 5,
        marginBottom: 10,
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
    },
    dataText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
