import React from 'react'
import { View, Text, Stylesheet, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

export default function TrackFlatlist({ trackInfo, playSelectedTrack, isThisSelected, isPlaying, togglePause }) {
    const checkIfIsThisSelected = () => {
        if (isThisSelected === trackInfo.id && isPlaying) {
            return {
                iconName: "ios-pause-circle",
                imgSourcePath: require("../../../assets/wave.gif")
            }
        } else if (isThisSelected === trackInfo.id && !isPlaying) {
            return {
                iconName: "ios-play-circle",
                imgSourcePath: require("../../../assets/staticWave.png")
            }
        } else if (isThisSelected !== trackInfo.id) {
            return {
                iconName: "ios-play-circle",
                imgSourcePath: require("../../../assets/trackIcon.png")
            }
        }
    }

    const checkIfIsThisPlaying = () => {
        if (isThisSelected !== trackInfo.id) return playSelectedTrack(trackInfo)
        if (isThisSelected === trackInfo.id) return togglePause()
    }

    return (
        <View style={styles.container}>
            <Image
                source={(checkIfIsThisSelected().imgSourcePath)}
                style={{ width: 80, height: 100, marginLeft: 10, resizeMode: "contain" }}
            />
            <View style={styles.textView}>
                <Text style={styles.trackNameText}>{trackInfo.title}</Text>
            </View>

            <View style={styles.TouchableView}>
                <TouchableOpacity onPress={() => checkIfIsThisPlaying()}>
                    <Ionicons name={checkIfIsThisSelected().iconName} size={29} color="#eb5834" />
                </TouchableOpacity>
            </View>
        </View>
    )
}