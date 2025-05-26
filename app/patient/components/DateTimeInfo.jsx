import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const DateTimeInfo = () => {
    const [chooseTime, setChooseTime] = useState(false);
    const handleTimeSelect = (time) => {
        setChooseTime(time === chooseTime ? null : time);
    }
    return (
        <View className="h-[12.5rem] mt-[5px] relative bg-[#003049] rounded-md">
            <View className="mt-[2px]">
                <Text className="text-[1.2rem] text-white text-center">Select Time</Text>
                <View className="flex-row justify-between mt-[4px] bg-gray-300 h-[3rem] px-[10px]">
                    <TouchableOpacity className="flex-row items-center justify-center gap-[10px]"
                        onPress={() => handleTimeSelect("10:00 - 1:00")}
                    >
                        <View className={`h-[1rem] w-[1rem] rounded-[50%] 
                        ${chooseTime === "10:00 - 1:00" ? "bg-[#c1121f]" : "bg-white"}`}></View>
                        <Text className="text-[1.1rem] ">10:00 - 1:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-center gap-[10px]"
                        onPress={() => handleTimeSelect("2:00 - 4:00")}
                    >
                        <View className={`h-[1rem] w-[1rem] rounded-[50%] 
                        ${chooseTime === "2:00 - 4:00" ? "bg-[#c1121f]" : "bg-white"}`}></View>
                        <Text className="text-[1.1rem] ">2:00 - 4:00</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-[1.2rem] mt-[6px] text-white text-center">Select Date and Day</Text>
                <View className="flex-row gap-[10px] mt-[4px]">
                    <Text className="text-[1.3rem] ml-[6px] text-white">Day :</Text>
                    <TextInput className="w-[15rem] h-[2rem] bg-gray-300 
                    rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                      
                    />
                </View>
                <View className="flex-row gap-[10px] mt-[6px]">
                    <Text className="text-[1.3rem] ml-[6px] text-white">Date :</Text>
                    <TextInput className="w-[15rem] h-[2rem] bg-gray-300 
                    rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                    keyboardType='numeric'
                    />
                </View>
            </View>
        </View>
    )
}

export default DateTimeInfo