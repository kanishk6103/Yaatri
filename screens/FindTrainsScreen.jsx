import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import InputFindTrains from '../components/FindTrains/InputFindTrains'
import SearchButton from '../components/FindTrains/SearchButton'
import Exchange from '../components/FindTrains/Exchange'
import SearchResult from '../components/FindTrains/SearchResult'
import { sample } from '../components/FindTrains/sampleResponse'
import DottedLine from '../assets/Components/DottedLine'
export default function FindTrainsScreen({ navigation }) {
    const [data, setData] = useState(sample.data)
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const handleExchange = () => {
        if ((fromValue.length === 0) && (toValue.length === 0)) return;
        const temp = fromValue;
        setFromValue(toValue);
        setToValue(temp);
    };

    return (
        <View className="h-screen bg-black">
            <View className="mx-6">
                <View className="flex flex-col space-y-2 justify-evenly my-2">
                    <View>
                        <InputFindTrains label={"From"} placeholder={"Enter source station.."} type={"Text"} value={fromValue} onChangeText={(text) => setFromValue(text)} />
                    </View>
                    <View className="relative">
                        <Pressable onPress={handleExchange} className="z-10"><Exchange /></Pressable>
                        <Text className="absolute left-12 top-1/2 -z-10"><DottedLine /></Text>
                    </View>
                    <View>
                        <InputFindTrains label={"To"} placeholder={"Enter destination station.."} type={"Text"} value={toValue} onChangeText={(text) => setToValue(text)} />
                    </View>
                </View>
                <View>
                    <InputFindTrains label={"Date of Journey"} placeholder={"Enter Date of Journey..."} type={"Date"} />
                </View>
            </View>
            <SearchButton title={"Search Trains"} />

            <ScrollView className="mt-2 mb-24">
                {
                    sample.data.map((singleData, index) => {
                        return <SearchResult data={singleData} key={index} />
                    })
                }
            </ScrollView>
        </View>
    )
}