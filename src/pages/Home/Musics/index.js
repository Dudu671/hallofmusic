import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import TrackPlayer, { addEventListener } from 'react-native-track-player'
import getRealm from '../../../services/realm'

import Header from '../../../components/Header'
import TrackItem from '../../../components/TrackItem'

export default function Musics({ navigation }) {
    const [dbTracks, setDbTracks] = useState([])
    const [selectedTrackId, setSelectedTrackId] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [toggleControlsVisible, setToggleControlsVisible] = useState(false)

    const getTracksFromDb = async () => {
        const realm = await getRealm()
        const data = realm.objects('Music')

        setDbTracks(data)
    }

    useEffect(() => {
        getTracksFromDb()
    }, [])

    const playSelectedTrack = (track) => {
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.updateOptions({
                capabilities: [
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_STOP
                ]
            })

            TrackPlayer.add({
                id: track.id,
                title: track.title,
                url: track.url,
                artwork: require('../../../../assets/artwork.jpg')
            })

            TrackPlayer.play()
            setSelectedTrackId(track.id)
            setIsPlaying(true)
        })
    }

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
        setSelectedTrackId(0)
    }

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Header
                togglePause={togglePause}
                toggleControlsVisible={true}
                stopPlaying={stopPlaying}
                isPlaying={isPlaying}
                navigateToAddContent={() => navigation.navigate('AddContent')}
            />

            <FlatList
                style={{ width: "100%", alignSelf: "center" }}
                marginHorizontal={10}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={dbTracks}
                extraData={selectedTrackId}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                    <TrackItem
                        trackInfo={item}
                        playSelectedTrack={playSelectedTrack}
                        isThisSelected={selectedTrackId}
                        isPlaying={isPlaying}
                        togglePause={togglePause}
                    />
                }
            />
        </View>
    )
}