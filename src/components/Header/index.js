import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({ navigateToAddContent }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Hall of Music</Text>

            <TouchableOpacity style={styles.headerAddTouchable} onPress={() => navigateToAddContent()}>
                <MaterialCommunityIcons name="music-note-plus" size={29} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerStopTouchable}>
                <FontAwesome name="stop-circle" size={29} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerPauseTouchable}>
                <FontAwesome name="pause-circle" size={29} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: "#eb5834",
        alignItems: "center",
        flexDirection: "row"
    },

    headerText: {
        fontSize: 18,
        color: "white",
        marginLeft: 10
    },

    headerAddTouchable: {
        position: "absolute",
        right: 20
    },

    headerStopTouchable: {
        position: "absolute",
        right: 60
    },

    headerPauseTouchable: {
        position: "absolute",
        right: 100
    }
})