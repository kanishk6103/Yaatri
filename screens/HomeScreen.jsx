import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Home/Card";
import data from "../components/Home/data";

const HomeScreen = () => {

    return (
        <View className="bg-black w-screen h-screen">
            <Text className="text-white mt-4 px-8 font-semibold text-lg">
                Train Services
            </Text>
            <View className="flex-row flex-wrap justify-center">
                {data.map((item) => {
                    return <Card key={item.sno} props={{ ...item }} />;
                })}
            </View>
        </View>
    );
};

export default HomeScreen;
