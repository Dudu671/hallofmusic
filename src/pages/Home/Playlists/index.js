import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

export default function Musics() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "#383838", width: "90%" }}>
                <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/proxy/3Hh1TPyCkw6-NunchCLnTp7HRRV8lelEtwsC2EE5rcq9JmZk3kMpxjOy65HcKG5Ph43_IlwAp7n6JPwNs2JGb_e62OOcbdLzEkAmYMfvVBHsdGmprrL1' }}
                    style={{ width: 100, height: 100 }}
                />
            </View>
        </View>
    )
}