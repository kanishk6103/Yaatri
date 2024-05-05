import { View, Text } from "react-native";
import React from "react";
import DummyData from "./DummyData";
import StatusCard from "./StatusCard";
import Trainstatus from "../../assets/components/Trainstatus";
const ResultBox = () => {
  const myString = DummyData.data.Duration;
  const [hour, minute] = myString.split(":");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var sourceData = new Date(DummyData.data.SourceDoj);
  var destinationData= new Date(DummyData.data.DestinationDoj);
  return (
    <View className="w-[333px] shrink-0 rounded-3xl bg-Dark">
      <View className="flex flex-row justify-between items-center py-1 px-2 gap-1 my-2 mx-1">
        <Text className="text-textWhite text-sm font-semibold">{`${DummyData.data.TrainName} (${DummyData.data.TrainNo})`}</Text>
        <View className="flex flex-row items-center py-1 px-2 space-x-1 rounded-md bg-borderColor">
          <Text className="">
            <Trainstatus />
          </Text>
          <Text className="text-[8px] font-normal text-SecondaryFont">
            Train Status
          </Text>
        </View>
      </View>
      <View className="border-borderColor border-[0.3px]"></View>
      <View className="flex flex-row justify-between my-2 mx-3">
        <View className="flex flex-col">
          <Text className="text-xs font-normal text-textWhite">
            {DummyData.data.ArrivalTime}
          </Text>
          <Text className="text-[10px] font-normal text-SecondaryFont">
            {DummyData.data.BoardingStationName}
          </Text>
          <Text className="text-[10px] font-normal text-SecondaryFont">
            {`${days[sourceData.getDay()]}, ${sourceData.getDate()} ${months[sourceData.getMonth()]}`}
          </Text>
        </View>
        <View className="flex flex-col items-start justify-center">
          <Text className="text-[8px] text-SecondaryFont">
            {`${hour} hr ${minute} min`}
          </Text>
        </View>
        <View className="flex flex-col items-end">
          <Text className="text-xs font-normal text-textWhite">
            {DummyData.data.DepartureTime}
          </Text>
          <Text className="text-[10px] font-normal text-SecondaryFont">
            {DummyData.data.ReservationUptoName}
          </Text>
          <Text className="text-[10px] font-normal text-SecondaryFont">
            {`${days[destinationData.getDay()]}, ${destinationData.getDate()} ${months[destinationData.getMonth()]}`}
          </Text>
        </View>
      </View>
      <View className="mx-3 my-2 space-y-2">
        <Text className="text-SecondaryFont text-xs font-bold">{`${DummyData.data.PassengerCount} Passengers`}</Text>
        <View className="flex flex-row justify-between flex-wrap">
          {DummyData.data.PassengerStatus.map((passenger, index) => (
            <StatusCard key={index} passenger={passenger} passengerCount />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ResultBox;
