import { View, Text } from 'react-native'
import { Button } from 'react-native'
import React from 'react'

const PNRCheckScreen = ({ navigation }) => {
    return (
        <View>
            <Text className='text-7xl'>PNRCheckScreen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default PNRCheckScreen