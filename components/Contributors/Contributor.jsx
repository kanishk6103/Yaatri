import { View, Text, Image, Linking } from "react-native";
import React from "react";
import Github from "../../assets/SVG/Github";
import Linkedin from "../../assets/SVG/Linkedin";

const Contributor = ({ name, image, githubUrl, linkedinUrl }) => {
    // Image, Name, Github, Linkedin
    return (
        <View className="flex flex-row justify-between my-3 bg-LightDark mx-6 p-4 py-8 rounded-lg w-full">
            {/* Image */}
            <View>
                <Image source={{ uri: image }} className="w-24 h-24 rounded-full" />
            </View>
            {/* Rest of the data */}
            <View className="flex flex-col h-full gap-2 items-end">
                <Text className="text-OffWhite text-lg font-bold">{name}</Text>
                <View className="flex flex-row gap-2">
                    <Text className="px-2" onPress={() => { Linking.openURL(githubUrl) }}>
                        <Github />
                    </Text>
                    <Text className="px-2" onPress={() => { Linking.openURL(linkedinUrl) }}>
                        <Linkedin />
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Contributor;
