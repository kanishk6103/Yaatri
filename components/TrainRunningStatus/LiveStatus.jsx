import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import PartialStatus from "./PartialStatus";

const LiveStatus = ({ data }) => {
    return (
        <ScrollView className="bg-Dark w-full px-2 my-2 mt-4 rounded-xl">
            {/* <PartialStatus stationArray={data.previous_stations} type={"previous"} /> */}
            <PartialStatus stationArray={data.route} type={"previous"} />
            {/* <View>
                <></>
            </View>
            <PartialStatus stationArray={data.upcoming_stations} type={"upcoming"} /> */}
        </ScrollView>
    );
};

export default LiveStatus;
