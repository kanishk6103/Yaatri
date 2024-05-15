import { Text, TouchableOpacity, Pressable, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card = ({ props }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate(props.navigate)}
            className="bg-Dark w-40 h-36 flex-col justify-start items-start m-2 p-3 inline-flex border border-black rounded-lg"
            // style={({ pressed }) => [
            //     {
            //         backgroundColor: pressed ? '#2475EE' : '#1D1F24',
            //     },
            // ]}
        >
            <View className=" bg-LightDark rounded-lg mb-3 w-16 h-14 flex justify-center items-center">
                <Text>{props.svg}</Text>
            </View>

            <Text className="text-white text-xs mb-1">{props.name}</Text>
            <Text className="text-white opacity-70 text-[10px]">
                {props.description}
            </Text>
        </Pressable>
    );
};

export default Card;
