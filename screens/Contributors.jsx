import { View, Text } from "react-native";
import React from "react";
import { contributorData } from "../components/Contributors/data";
import Contributor from "../components/Contributors/Contributor";

const Contributors = () => {
    return (
        <View className="flex items-center w-screen h-screen bg-black p-6 py-12">
            <View className="">
                {contributorData.map((data, index) => {
                    const { name, image, githubUrl, linkedinUrl } = data;
                    return <Contributor key={index} name={name} image={image} githubUrl={githubUrl} linkedinUrl={linkedinUrl} />;
                })}
            </View>
        </View>
    );
};

export default Contributors;
