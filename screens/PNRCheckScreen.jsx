// PNRCheckScreen.js
import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import ResultBox from "../components/PNRCheck/ResultBox";
import InputFindTrains from "../components/FindTrains/InputFindTrains";
import DummyData from "../components/PNRCheck/DummyData.js"

const PNRCheckScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [PNR, setPNR] = useState("")

  const handleSearch = async () => {
    // console.log("Component 2");
    console.log(PNR);
    if (PNR.length === 0)
      return;
    console.log(PNR);
    const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${PNR}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `77b801c4e5mshe9b831b564a9b17p163cb1jsn8e147967bb2f`,
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
    <View className="w-screen h-screen bg-Background px-6">
      <View className="">
        {/* <Text className="text-lg font-semibold text-textWhite my-5">
          Enter PNR Number
        </Text>
        <Input onSearch={handleSearch} /> */}
        <View className="my-2 flex flex-row gap-2 justify-between items-center px-1">
          <View className="w-3/4">
            <InputFindTrains label={"PNR Number"} placeholder={"Enter PNR number..."} type={"Number"} value={PNR} onChangeText={(pnrNumber) => setPNR(pnrNumber)} />
          </View>
          <View className="w-[20%] h-max pt-6">
            <Pressable
              className="flex justify-center items-center px-3 py-2 bg-Primary rounded-lg"
              onPress={handleSearch}
            >
              <Text className="text-OffWhite font-semibold">Search</Text>
            </Pressable>
          </View>
        </View>
        {result ? (<ResultBox result={result} />) : (<View className="flex items-center justify-center my-12"><Text className="text-LightDark text-xs font-black">Your search result will appear here.</Text></View>)}
      </View>
    </View>
  );
};

export default PNRCheckScreen;
