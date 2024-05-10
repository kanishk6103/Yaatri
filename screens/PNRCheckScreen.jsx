// PNRCheckScreen.js
import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import ResultBox from "../components/PNRCheck/ResultBox";

const PNRCheckScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const handleSearch = async (pnr) => {
    console.log("Component 2");
    console.log(pnr);
    if (pnr.length === 0)
      return;
    console.log(pnr);
    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ``,
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setResult(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View className="w-screen h-screen bg-Background">
      <View className="mx-8">
        <Text className="text-lg font-semibold text-textWhite my-5">
          Enter PNR Number
        </Text>
        <Input onSearch={handleSearch} />
        {(result != null) ? (<ResultBox result={result} />) : (<View className="flex items-center justify-center my-12"><Text className="text-LightDark text-xs font-black">Your search result will appear here.</Text></View>)}
      </View>
    </View>
  );
};

export default PNRCheckScreen;
