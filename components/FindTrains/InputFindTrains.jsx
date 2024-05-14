import { View, Text, TextInput, Button, Pressable, Platform } from 'react-native'
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { apiDateFormat } from '../../utils/dateConverter';
const InputFindTrains = ({ label, placeholder, type, value, onChangeText, onDateChange }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false)
    const [doj, setDoj] = useState("")
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }
    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate)
            const formattedDate = apiDateFormat(currentDate)
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDoj(formattedDate)
                onDateChange(formattedDate);
            }
        } else {
            toggleDatePicker();
        }
    }
    return (
        <View className="my-3">
            <Text className="text-xs text-SecondaryFont my-1 font-bold">{label}</Text>
            {type === "Text" ?
                <TextInput
                    className="rounded-lg px-3 py-2 bg-InputBG text-md text-OffWhite"
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    placeholderTextColor={"#6B6B6B"}
                />
                :
                type === "Number" ?
                    <TextInput
                        className="rounded-lg px-3 py-2 bg-InputBG text-md text-OffWhite"
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        placeholderTextColor={"#6B6B6B"}
                        keyboardType="numeric"
                    /> :
                    <>
                        {<Pressable onPress={toggleDatePicker}>
                            <TextInput className="rounded-lg px-3 py-2 bg-InputBG text-md text-OffWhite"
                                placeholder={placeholder}
                                defaultValue={text}
                                placeholderTextColor={"#6B6B6B"} value={doj} onChangeText={setDoj} editable={false}
                            />
                        </Pressable>}
                        {showPicker && <DateTimePicker mode='date' display='spinner' value={date} onChange={onChange} />}
                    </>
            }
        </View>
    )
}

export default InputFindTrains