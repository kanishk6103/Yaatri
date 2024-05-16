import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import LiveStatus from "../components/TrainRunningStatus/LiveStatus.jsx";
import InputFindTrains from "../components/FindTrains/InputFindTrains";
import SearchButton from "../components/FindTrains/SearchButton.jsx";
import {
    convertCurrentDate,
    differenceFromCurrent,
} from "../utils/dateConverter.js";
import { useRoute } from "@react-navigation/native";
import { scheduleSample } from "../components/TrainRunningStatus/scheduleSample.js";
import { sampleData } from "../components/TrainRunningStatus/sampleData.js";

const TrainRunningScreen = ({ navigation }) => {
    // const [data, setData] = useState(sampleData.data);
    const [data, setData] = useState(null);
    // const [scheduleData, setScheduleData] = useState(scheduleSample.data);
    const [scheduleData, setScheduleData] = useState(null);
    const [clicked, setClicked] = useState(true);
    const [startDay, setStartDay] = useState(0);
    const handleClick = () => {
        setClicked(true);
    };
    const [trainNumber, setTrainNumber] = useState("");
    const [date, setDate] = useState("");
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        // console.log(selectedDate)
        const currentDate = Date.now();
        let timestampinMillis = currentDate; // Timestamp in milliseconds
        const formattedCurrent = convertCurrentDate(timestampinMillis);
        const difference = differenceFromCurrent(
            formattedCurrent,
            selectedDate
        );
        setStartDay(difference);
        // console.log(difference);
    };

    const route = useRoute();

    const searchTrains = async () => {
        if (trainNumber.length === 0 || startDay.length === 0) return;
        const url = `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainNumber}&startDay=${startDay}`;
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

    const getSchedule = async () => {
        if (trainNumber.length === 0) return;
        const url = `https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo=${trainNumber}`;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "77b801c4e5mshe9b831b564a9b17p163cb1jsn8e147967bb2f",
                "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setScheduleData(result.data);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    // console.log(route.params.paramKey);
    // if (route.params) { setTrainNumber(route.params?.paramKey); searchTrains(); getSchedule() }
    useEffect(() => {
        if (route.params) {
            console.log(route.params?.trainNumber);
            console.log(route.params?.startDate);
            const startDate = route.params?.startDate;
            setTrainNumber(route.params?.trainNumber);
            setDate(startDate);
            const currentDate = Date.now();
            let timestampinMillis = currentDate; // Timestamp in milliseconds
            const formattedCurrent = convertCurrentDate(timestampinMillis);
            const difference = differenceFromCurrent(
                formattedCurrent,
                startDate
            );
            setStartDay(difference);
            searchTrains();
            getSchedule();
        }
    }, [trainNumber]);
    return (
        <View className="w-full h-full bg-Background py-2 px-6">
            <View className="h-full">
                {/* <Text className="text-lg font-semibold text-textWhite my-5">
                    Enter Train Number
                </Text> */}
                <InputFindTrains
                    label={"Train Number"}
                    placeholder={"Enter train number..."}
                    type={"Number"}
                    value={trainNumber}
                    onChangeText={(text) => setTrainNumber(text)}
                />
                <InputFindTrains
                    label={"Train Start Date"}
                    placeholder={"Select start date..."}
                    type={"Date"}
                    value={date}
                    onDateChange={handleDateChange}
                />
                <SearchButton
                    title={"Search"}
                    onPress={() => {
                        searchTrains();
                        getSchedule();
                    }}
                />
                <LiveStatus data={data} scheduleData={scheduleData} />
            </View>
        </View>
    );
};

export default TrainRunningScreen;
