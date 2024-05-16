import { View, Text, Pressable } from "react-native";
import React from "react";
import StatusCard from "./StatusCard";
import TrainStatusInfo from "../../assets/Components/TrainStatusInfo";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../utils/dateConverter";
const ResultBox = ({ result }) => {
    const DummyData = result;
    const nav = useNavigation();
    console.log(result);
    function convertDateFormat(dateString) {
        let parts = dateString.split("-");
        let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
        return formattedDate;
    }
    const convertedDate = convertDateFormat(DummyData.data.SourceDoj);
    const handleTrainStatus = () => {
        console.log(DummyData.data.TrainNo, convertedDate);
        nav.navigate("Train Status", {
            trainNumber: DummyData.data.TrainNo,
            startDate: convertedDate,
        });
    };

    if (!result) {
        return;
    }
    const myString = DummyData?.data?.Duration;
    const [hour, minute] = myString.split(":");

    var sourceData = DummyData?.data?.SourceDoj;
    console.log(sourceData);
    var destinationData = DummyData?.data?.DestinationDoj;
    console.log(destinationData);
    return (
        <View className="w-full mx-0 px-0 shrink-0 rounded-3xl bg-Dark">
            <View className="flex flex-row justify-between items-center py-1 px-2 gap-1 my-2 mx-1">
                <Text className="text-textWhite text-sm font-semibold">{`${DummyData.data.TrainName} (${DummyData.data.TrainNo})`}</Text>
                <View className="flex flex-row items-center py-1 px-2 space-x-1 rounded-md bg-borderColor">
                    <Pressable
                        onPress={() => handleTrainStatus()}
                        className="flex flex-row gap-1 p-1"
                    >
                        <TrainStatusInfo />
                        <Text className="text-[8px] font-normal text-SecondaryFont">
                            Train Status
                        </Text>
                    </Pressable>
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
                        {` ${formatDate(sourceData)}`}
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
                        {`${formatDate(destinationData)}`}
                    </Text>
                </View>
            </View>
            <View className="mx-3 my-2 space-y-2">
                <Text className="text-SecondaryFont text-xs font-bold">{`${DummyData.data.PassengerCount} Passengers`}</Text>
                <View className="flex flex-row justify-between flex-wrap">
                    {DummyData.data.PassengerStatus.map((passenger, index) => (
                        <StatusCard
                            key={index}
                            passenger={passenger}
                            passengerCount
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default ResultBox;
