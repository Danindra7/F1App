/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import RaceCard from '../raceCard'
import { raceData } from '../../data/raceData'

export default function RaceList({ navigation, screenName }) {
    const [race] = useState(raceData);
    // console.log(race)
    return (
        <View style={styles.wrapper}>
            <FlatList
                style={{ flex: 1 }}
                keyExtractor={(item) => item.id}
                data={race}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(screenName, item)}>
                        <RaceCard
                            date={item.date}
                            month={item.month}
                            round={item.round}
                            country={item.country}
                            desc={item.desc}
                        />
                    </TouchableOpacity>
                )}
            />
            {/* <Button title="halo" ></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        flex: 1,
    },
})
