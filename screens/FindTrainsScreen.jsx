import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import InputFindTrains from "../components/FindTrains/InputFindTrains";
import SearchButton from "../components/FindTrains/SearchButton";
import Exchange from "../components/FindTrains/Exchange";
import SearchResult from "../components/FindTrains/SearchResult";
import { sample } from "../components/FindTrains/sampleResponse";
import DottedLine from "../assets/Components/DottedLine";
export default function FindTrainsScreen({ navigation }) {
    const [data, setData] = useState(null);
    // const [data, setData] = useState(sample.data);
    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [date, setDate] = useState("");

    const handleExchange = () => {
        if (fromValue.length === 0 && toValue.length === 0) return;
        const temp = fromValue;
        setFromValue(toValue);
        setToValue(temp);
    };

    // useEffect(() => { }, [])
    //

    //

    const searchTrains = async () => {
        if (fromValue.length === 0 || toValue.length === 0 || date.length === 0)
            return;
        const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromValue}&toStationCode=${toValue}&dateOfJourney=${date}`;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": `77b801c4e5mshe9b831b564a9b17p163cb1jsn8e147967bb2f`,
                "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <View className="h-screen bg-black">
            <View className="px-6">
                <View className="flex flex-col space-y-2 justify-evenly my-2">
                    <View>
                        <InputFindTrains
                            label={"From"}
                            placeholder={"Enter source station.."}
                            type={"Text"}
                            value={fromValue}
                            onChangeText={(text) =>
                                setFromValue(text.toUpperCase())
                            }
                        />
                    </View>
                    <View className="relative">
                        <Pressable onPress={handleExchange} className="z-10">
                            <Exchange />
                        </Pressable>
                        <Text className="absolute left-12 top-1/2 -z-10">
                            <DottedLine />
                        </Text>
                    </View>
                    <View>
                        <InputFindTrains
                            label={"To"}
                            placeholder={"Enter destination station.."}
                            type={"Text"}
                            value={toValue}
                            onChangeText={(text) =>
                                setToValue(text.toUpperCase())
                            }
                        />
                    </View>
                </View>
                <View>
                    <InputFindTrains
                        label={"Date of Journey"}
                        placeholder={"Enter Date of Journey..."}
                        type={"Date"}
                        onDateChange={handleDateChange}
                    />
                </View>
            </View>
            <View className="px-6">
                <SearchButton title={"Search Trains"} onPress={searchTrains} />
            </View>
            <ScrollView className="mt-2 mb-24 w-full">
                {data ? (
                    data.map((singleData, index) => {
                        return (
                            <SearchResult
                                data={singleData}
                                nav={navigation}
                                key={index}
                            />
                        );
                    })
                ) : (
                    <View className="flex items-center justify-center my-12">
                        <Text className="text-LightDark text-xs font-black">
                            Your search results will appear here.
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
