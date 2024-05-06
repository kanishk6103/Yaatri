import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
const Input = ({ value }) => {
    const [text, onChangeText] = React.useState();
    return (
        <View className="my-4 flex flex-row gap-2 w-full">
            <TextInput
                className="py-3 px-4 items-center gap-3 self-stretch rounded-md bg-OffWhite text-Dark text-base font-semibold w-[240px] h-[44px]"
                onChangeText={onChangeText}
                placeholder={`ENTER ${value} NUMBER....`}
                placeholderTextColor="#A8A8A8"
                value={text}
            />

            <Pressable className="bg-Primary flex justify-center items-center rounded-lg px-3">
                <Text className="text-white font-bold text-lg">Search</Text>
            </Pressable>

            {/* <Text
                className="flex flex-col text-center text-lg font-semibold justify-center items-center self-stretch px-3 py-2 bg-Primary rounded-lg w-[82px] h-[44px] text-OffWhite"
                onPress={() => {
                    handleClick;
                }}
            >
                Search
            </Text> */}
        </View>
    );
};

export default Input;
