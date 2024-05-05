import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function FindTrainsScreen({ navigation }) {
    return (
        <View>
            <Text>FindTrainsScreen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}