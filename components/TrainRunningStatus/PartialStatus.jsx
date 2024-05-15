import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import StationComponent from "./StationComponent";
import Train from "../../assets/SVG/Train";
// import { sampleData } from './sampleData'
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const PartialStatus = ({ stationArray, currentData }) => {
    let maxDistance =
        stationArray[stationArray.length - 1].distance_from_source;
    const trainPos = (currentData.distance_from_source / maxDistance) * 99.8;
    const integer = Math.floor(trainPos);
    return (
        <View className="h-[5000px] relative w-full mb-12">
            {/* <View className={"absolute left-5 w-2 h-full bg-Primary " + (type === "previous" ? "rounded-t-full mt-5" : type === "current" ? "" : "rounded-b-full mb-5")} /> */}
            <View className={"absolute left-5 w-3 h-full rounded-full my-6"}>
                <View
                    className={`bg-Primary rounded-full`}
                    style={{ height: `${trainPos}%` }}
                ></View>
                <View
                    className={`bg-LightDark rounded-full`}
                    style={{ height: `${99.8 - trainPos}%` }}
                ></View>
            </View>
            {stationArray.map((singleStation, index) => {
                const topPosition =
                    (singleStation.distance_from_source / maxDistance) * 99.8;
                {
                    /* const integerNum = Math.floor(topPosition);
                    console.log(integerNum) */
                }
                return singleStation.platform_number !== 0 ? (
                    <View
                        className="absolute ml-[18px] my-5"
                        style={{ top: `${topPosition}%` }}
                        key={index}
                    >
                        <View className="">
                            <StationComponent
                                stationData={singleStation}
                                currentData={currentData}
                            />
                        </View>
                    </View>
                ) : null;
            })}
            <View
                className="absolute flex flex-row gap-1 ml-[1px]"
                style={{ top: `${trainPos}%` }}
            >
                <View className="flex items-center justify-center bg-black p-1 rounded-full w-10 h-10">
                    <Text>
                        <Train />
                    </Text>
                </View>
                <Animated.View
                    className="w-3/4"
                    key={"uniqueKey"}
                    entering={FadeOut.duration(8000)}
                >
                    <Text className="w-full h-max text-Light bg-Background p-2 rounded-lg">
                        {currentData.current_location_info[0].readable_message}
                    </Text>
                </Animated.View>
            </View>
        </View>
    );
};

export default PartialStatus;
