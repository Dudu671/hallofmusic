import React from 'react'
import { View, Text, Stylesheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

export default function TrackFlatlist({ trackInfo, playSelectedTrack }) {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.trackNameText}>{trackInfo.fileName}</Text>
            </View>

            <View style={styles.TouchableView}>
                <TouchableOpacity>
                    <Ionicons name="ios-play-circle" size={29} color="#eb5834" />
                </TouchableOpacity>
            </View>
        </View>
    )
}