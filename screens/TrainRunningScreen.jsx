import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import Input from "../components/TrainRunningStatus/Input.jsx";
import LiveStatus from "../components/TrainRunningStatus/LiveStatus.jsx";
import InputFindTrains from "../components/FindTrains/InputFindTrains"
import SearchButton from "../components/FindTrains/SearchButton.jsx";
import { convertCurrentDate, differenceFromCurrent } from "../utils/dateConverter.js";
import { sampleData } from "../components/TrainRunningStatus/sampleData.js"
const TrainRunningScreen = ({ navigation }) => {
    const [data, setData] = useState(sampleData.data)
    const [clicked, setClicked] = useState(true);
    const [startDay, setStartDay] = useState(0)
    const handleClick = () => {
        setClicked(true);
    };
    const [trainNumber, setTrainNumber] = useState("");
    const [date, setDate] = useState('')
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        // console.log(selectedDate)
        const currentDate = Date.now();
        let timestampinMillis = currentDate; // Timestamp in milliseconds
        const formattedCurrent = convertCurrentDate(timestampinMillis);
        const difference = differenceFromCurrent(formattedCurrent, selectedDate)
        setStartDay(difference);
        // console.log(difference);
    };
    const searchTrains = async () => {
        if ((trainNumber.length === 0) || (startDay.length === 0)) return;
        const url = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=${startDay}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': ``,
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data)
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View className="w-full h-full bg-Background py-2 px-6">
            <View className="">
                {/* <Text className="text-lg font-semibold text-textWhite my-5">
                    Enter Train Number
                </Text> */}
                <InputFindTrains label={"Train Number"} placeholder={"Enter train number..."} type={"Number"} value={trainNumber} onChangeText={(text) => setTrainNumber(text)} />
                <InputFindTrains label={"Train Start Date"} placeholder={"Select start date..."} type={"Date"} value={date} onDateChange={handleDateChange} />
                <SearchButton title={"Search"} onPress={searchTrains} />
                <ScrollView className="mb-64">
                    {
                        data ? (data.previous_stations.map((singleStation, index) => {
                            return <Text className="text-white" key={index}>{singleStation.station_name}</Text>
                        })) : (<View className="flex items-center justify-center my-12"><Text className="text-LightDark text-xs font-black">Your search results will appear here.</Text></View>)
                    }
                </ScrollView>
            </View>

            {/* <LiveStatus /> */}
        </View>
    );
};

export default TrainRunningScreen;
