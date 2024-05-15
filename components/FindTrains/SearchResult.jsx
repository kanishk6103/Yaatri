import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    ScrollView,
} from "react-native";
import React from "react";
// import TrainStatus from "../../assets/Components/Trainstatus"
import {
    addDays,
    formatDate,
    formatDuration,
} from "../../utils/dateConverter.js";
import DottedLineCenter from "../../assets/Components/DottedLineCenter.jsx";
import BoxComponent from "./BoxComponent.jsx";
import TrainStatusInfo from "../../assets/Components/TrainStatusInfo.jsx";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({ data }) => {
    const nav = useNavigation();
    const {
        train_name,
        train_number,
        from_station_name,
        to_station_name,
        from_std,
        to_std,
        from_day,
        to_day,
        train_date,
        duration,
        class_type,
        run_days,
    } = data;
    const days = to_day - from_day;
    const formattedDate = formatDate(train_date);
    const formattedDuration = formatDuration(duration);
    const arrivalDate = addDays(train_date, days);
    function convertDateFormat(dateString) {
        let parts = dateString.split("-");
        let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
        return formattedDate;
    }
    const convertedDate = convertDateFormat(train_date);

    const handleTrainStatus = () => {
        nav.navigate("Train Status", {
            trainNumber: train_number,
            startDate: convertedDate,
        });
    };
    return (
        <View className="w-full mt-4">
            {/* Train Name, Number and Status Button */}
            <View className="w-max mx-6 bg-Dark px-3 py-2 rounded-2xl">
                <View className="flex flex-row justify-between w-full items-center border-b-slate-600">
                    <View className="flex flex-row gap-1 items-center w-max">
                        <Text className="text-OffWhite font-semibold text-sm max-w-[75%] line-clamp-1">
                            {train_name.length > 20
                                ? train_name.slice(0, train_name.length / 3) +
                                  "..."
                                : train_name}
                        </Text>
                        <Text className="text-OffWhite font-semibold text-sm">
                            ({train_number})
                        </Text>
                    </View>
                    <Pressable
                        className="px-2 py-1"
                        onPress={handleTrainStatus}
                    >
                        <View className="flex flex-row gap-1 text-SecondaryFont bg-InputBG px-2 py-1 rounded-md items-center">
                            <Text className="">
                                <TrainStatusInfo />
                            </Text>
                            <Text className="text-SecondaryFont">
                                Train Status
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View className="flex flex-row justify-between items-baseline">
                    {/* Source */}
                    <View className="flex flex-col gap-1 mt-2 w-1/3">
                        {/* Time */}
                        <View>
                            <Text className="text-OffWhite text-xs">
                                {from_std}
                            </Text>
                        </View>
                        {/* Source Station */}
                        <View>
                            <Text className="text-SecondaryFont text-xs">
                                {from_station_name.length > 16
                                    ? from_station_name.slice(
                                          0,
                                          from_station_name.length / 1.8
                                      ) + "..."
                                    : from_station_name}
                            </Text>
                        </View>
                        {/* Date */}
                        <View>
                            <Text className="text-SecondaryFont text-xs">
                                {formattedDate}
                            </Text>
                        </View>
                    </View>
                    <View className="w-1/3 relative">
                        {/* <Text className="w-max"><DottedLineCenter /></Text> */}
                        <Text className="text-SecondaryFont text-[10px] absolute -top-2 left-[25%]">
                            {formattedDuration}
                        </Text>
                    </View>
                    {/* Destination */}
                    <View className="flex flex-col gap-1 mt-2 justify-end items-end w-1/3">
                        {/* Time */}
                        <View>
                            <Text className="text-OffWhite text-xs">
                                {to_std}
                            </Text>
                        </View>
                        {/* Destination Station */}
                        <View>
                            <Text className="text-SecondaryFont text-xs">
                                {to_station_name.length > 16
                                    ? to_station_name.slice(
                                          0,
                                          to_station_name.length / 1.8
                                      ) + "..."
                                    : to_station_name}
                            </Text>
                        </View>
                        {/* Date */}
                        <View>
                            <Text className="text-SecondaryFont text-xs">
                                {arrivalDate}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="flex flex-col gap-1 my-1 space-y-2">
                    <View className="flex flex-col">
                        {/* Available Classes */}
                        <Text className="text-xs font-bold text-[#666666]">
                            Available Classes:
                        </Text>
                        <View className="flex flex-row gap-2 w-max flex-wrap">
                            {class_type.map((singleClass, index) => {
                                return (
                                    <Text
                                        className={
                                            "px-3 py-2 rounded text-sm font-bold text-OffWhite bg-InputBG"
                                        }
                                        key={index}
                                    >
                                        {singleClass}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    {/* Operating Days */}
                    <View className="flex flex-col">
                        {/* Running Days */}
                        <Text className="text-xs font-bold text-[#666666]">
                            Operating Days:
                        </Text>
                        <View className="flex flex-row gap-2 w-max flex-wrap">
                            {run_days.map((singleClass, index) => {
                                return (
                                    <Text
                                        className={
                                            "flex flex-row items-center justify-center px-3 py-2 rounded text-sm font-bold text-OffWhite bg-Primary w-14"
                                        }
                                        key={index}
                                    >
                                        {singleClass}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SearchResult;
