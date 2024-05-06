// Input.js
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Input = ({ onSearch }) => {
    const [text, onChangeText] = useState("");

    const handlePress = () => {
        console.log("Handle Press is Called 1");
        console.log(text);
        onSearch(text); // Trigger the API call with the entered PNR number
    };

    return (
        <View className="my-4 flex flex-row gap-2">
            <TextInput
                className="py-3 px-4 items-center gap-3 self-stretch rounded-md bg-OffWhite text-Dark text-base font-semibold w-[240px] h-[44px]"
                onChangeText={onChangeText}
                placeholder="ENTER PNR NUMBER...."
                placeholderTextColor="#A8A8A8"
                value={text}
            />
            <TouchableOpacity
                className="flex flex-col text-center text-lg font-semibold justify-center items-center self-stretch px-3 py-2 bg-Primary rounded-lg w-[82px] h-[44px] text-OffWhite"
                onPress={handlePress}
            >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Input;

