import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

export default function AddContent() {
    const [duration, setDuration] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [sliderPosition, setSliderPosition] = useState(0)

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Text>Add content</Text>
            <Button title="Get files" />
            <Button title="Play" />
        </View>
    )
}