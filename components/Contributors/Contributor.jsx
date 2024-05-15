import { View, Text, Image } from "react-native";
import React from "react";
import Github from "../../assets/SVG/Github";
import Linkedin from "../../assets/SVG/Linkedin";

const Contributor = ({ name, image, githubUrl, linkedinUrl }) => {
    // Image, Name, Github, Linkedin
    return (
        <View className="flex flex-row w-full px-6 justify-between">
            {/* Image */}
            <View>
                <Image source={{ uri: image }} className="w-4 h-4" />
            </View>
            {/* Rest of the data */}
            <View className="flex flex-col">
                <Text>{name}</Text>
                <View className="flex flex-row gap-2">
                    <Text>
                        <Github />
                    </Text>
                    {/* github url and username */}
                    <Text>{githubUrl}</Text>
                </View>
                <View>
                    <Text>
                        <Linkedin />
                    </Text>
                    {/* linkedin url and username */}
                    <Text>{linkedinUrl}</Text>
                </View>
            </View>
        </View>
    );
};

export default Contributor;
