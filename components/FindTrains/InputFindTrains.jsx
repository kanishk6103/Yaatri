import { View, Text, TextInput, Button, Pressable, Platform } from 'react-native'
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
const InputFindTrains = ({ label, placeholder, type }) => {
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
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDoj(currentDate.toDateString())
            }
        } else {
            toggleDatePicker();
        }
    }
    return (
        <View className="my-4">
            <Text className="text-xs text-SecondaryFont">{label}</Text>
            {type === "Text" ?
                <TextInput
                    className="rounded-lg px-3 py-2 bg-InputBG text-md text-OffWhite"
                    placeholder={placeholder}
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                    placeholderTextColor={"#A8A8A8"}
                />
                :
                <>
                    {<Pressable onPress={toggleDatePicker}>
                        <TextInput className="rounded-lg px-3 py-2 bg-InputBG text-md text-OffWhite"
                            placeholder={placeholder}
                            defaultValue={text}
                            placeholderTextColor={"#A8A8A8"} value={doj} onChangeText={setDoj} editable={false}
                        />
                    </Pressable>}
                    {showPicker && <DateTimePicker mode='date' display='spinner' value={date} onChange={onChange} />}
                </>
            }
        </View>
    )
}

export default InputFindTrains