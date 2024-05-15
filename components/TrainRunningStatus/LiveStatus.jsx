import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import PartialStatus from "./PartialStatus";

const LiveStatus = ({ data, scheduleData }) => {
    return (data && scheduleData) ? (
        <ScrollView className="bg-Dark w-full px-2 my-2 mt-4 rounded-xl">
            {/* <PartialStatus stationArray={data.previous_stations} type={"previous"} /> */}
            <PartialStatus stationArray={scheduleData.route} currentData={data} />
            {/* <View>
                <></>
            </View>
            <PartialStatus stationArray={data.upcoming_stations} type={"upcoming"} /> */}
        </ScrollView>
    ) : (<View className="flex items-center justify-center my-12"><Text className="text-LightDark text-sm font-black">Your search results will appear here.</Text></View>)
};

export default LiveStatus;
