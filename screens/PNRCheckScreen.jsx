import { View, Text } from "react-native";
import { Button } from "react-native";
import React from "react";
import Input from "../components/Input";
import ResultBox from "../components/PNRCheck/ResultBox";

const PNRCheckScreen = ({ navigation }) => {
    const [clicked, setclicked] = React.useState(true);
    const hanleClick=()=>{
        setclicked(true);
    }
  return (
    <View className="w-[390px] h-[844px] bg-Background">
      <View className="mx-8">
        <Text className="text-lg font-semibold text-textWhite my-5">
          Enter PNR Number
        </Text>
        <Input value={"PNR"} />
        {clicked?<ResultBox/>:null}
      </View>
    </View>
  );
};

export default PNRCheckScreen;
