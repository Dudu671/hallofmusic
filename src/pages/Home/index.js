import React, { useState } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TrackPlayer, { addEventListener, getState } from 'react-native-track-player'

import Musics from './Musics'
import Playlists from './Playlists'

import Header from '../../components/Header'

export default function Home({ navigation }) {
    const [isPlaying, setIsPlaying] = useState(true)
    const [toggleControlsVisible, setToggleControlsVisible] = useState(false)

    const Tab = createBottomTabNavigator()

    const togglePause = () => {
        if (!isPlaying) {
            TrackPlayer.play()
            setIsPlaying(true)
        } else {
            TrackPlayer.pause()
            setIsPlaying(false)
        }
    }

    const stopPlaying = () => {
        TrackPlayer.stop()
        TrackPlayer.destroy()
        setIsPlaying(false)
    }

    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Header
                togglePause={togglePause}
                toggleControlsVisible={true}
                stopPlaying={stopPlaying}
                isPlaying={isPlaying}
                navigateToAddContent={() => navigation.navigate('AddContent')}
            />

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let iconColor

                        if (route.name === 'Músicas') {
                            iconName = 'library-music'
                            iconColor = focused ? 'white' : '#a6a6a6'
                        } else if (route.name === 'Playlists') {
                            iconName = 'queue-music'
                            iconColor = focused ? 'white' : '#a6a6a6'
                        }

                        return <MaterialIcons name={iconName} size={24} color={iconColor} />
                    }
                })}

                tabBarOptions={{
                    style: { backgroundColor: "#eb5834" },
                    activeTintColor: "white",
                    inactiveTintColor: "#a6a6a6"
                }}
            >
                <Tab.Screen name="Músicas" component={Musics} />
                <Tab.Screen name="Playlists" component={Playlists} />
            </Tab.Navigator>
        </View>
    )
}