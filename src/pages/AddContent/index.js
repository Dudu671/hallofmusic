import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import TrackPlayer from 'react-native-track-player'
import getRealm from '../../services/realm'

export default function AddContent() {
    const [selectedTracks, setSelectedTracks] = useState([])

    useEffect(() => {
        saveTracks()
    }, [selectedTracks])

    const getTrackFiles = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.audio]
            })

            setSelectedTracks([])
            setSelectedTracks(results)

            setTimeout(() => {
                setSelectedTracks([])
            }, 5000)
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                Alert.alert('Aviso', 'Seleção de arquivos cancelada')
            } else {
                alert('Erro desconhecido: ' + JSON.stringify(error))
                throw error
            }
        }
    }

    const saveTracks = async () => {
        const realm = await getRealm()

        realm.write(() => {
            selectedTracks.forEach(track => {
                let lastId = realm.objects('Music').length

                realm.create('Music', {
                    id: lastId + 1,
                    title: track.name,
                    url: track.uri
                })
            })
        })
    }

    const play = async () => {
        await TrackPlayer.setupPlayer()
        await TrackPlayer.add({
            id: 1,
            title: 'Iron Dragon - Alliance',
            url: 'content://com.android.providers.media.documents/document/audio%3A90'
        })
        await TrackPlayer.play()
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Text>Add content</Text>
            <Button title="Get files" onPress={() => getTrackFiles()} />
            <Button title="Play" onPress={() => play()} />
        </View>
    )
}