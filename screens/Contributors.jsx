import { View, Text } from "react-native";
import React from "react";
import { contributorData } from "../components/Contributors/data";
import Contributor from "../components/Contributors/Contributor";

const Contributors = () => {
    return (
        <View className="flex justify-center items-center w-screen h-screen bg-black">
            {contributorData.map((data, index) => {
                return <Contributor key={index} data={data} />;
            })}
        </View>
    );
};

export default Contributors;
