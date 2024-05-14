import { View, Text, Button, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const SearchButton = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress} className="bg-Primary flex justify-center items-center rounded-xl py-3 px-8">
            <Text className="text-white font-bold text-lg">{title}</Text>
        </Pressable>
        // <Button title={title} className="bg-Primary rounded-xl py-3 px-8" />
    )
}

export default SearchButton