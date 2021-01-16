import React from 'react'
import { View, Text, FlatList } from 'react-native'

import TrackItem from '../../../components/TrackItem'

export default function Musics() {
    const musics = [
        { id: 1, fileName: "Iron Dragon - Alliance" },
        { id: 2, fileName: "Two Steps from Hell - Victory" },
        { id: 3, fileName: "Storm Sound - A Warrior's quest" },
        { id: 4, fileName: "Iron Dragon - Alliance" },
        { id: 5, fileName: "Two Steps from Hell - Victory" },
        { id: 6, fileName: "Storm Sound - A Warrior's quest" },
        { id: 7, fileName: "Iron Dragon - Alliance" },
        { id: 8, fileName: "Two Steps from Hell - Victory" },
        { id: 9, fileName: "Storm Sound - A Warrior's quest" },
        { id: 10, fileName: "Iron Dragon - Alliance" },
        { id: 11, fileName: "Two Steps from Hell - Victory" },
        { id: 12, fileName: "Storm Sound - A Warrior's quest" },
        { id: 13, fileName: "Iron Dragon - Alliance" },
        { id: 14, fileName: "Two Steps from Hell - Victory" },
        { id: 15, fileName: "Storm Sound - A Warrior's quest" }
    ]

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList
                style={{ width: "100%" }}
                marginHorizontal={10}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={musics}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <TrackItem trackInfo={item} />}
            />
        </View>
    )
}