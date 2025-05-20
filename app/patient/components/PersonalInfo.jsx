import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const PersonalInfo = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [remark, setRemark] = useState("");

    const handleDone = () => {
        const data = { name, age, address, phone, sex, email, remark }
        onSubmit(data);
    }
    return (
        <View className="h-[18rem] flex relative bg-[#003049] p-[10px] mt-[10px] rounded-md">
            <View className="flex-row justify-between">
                <View className="flex-row gap-[10px]">
                    <Text className="text-[1.3rem] text-white">Name :</Text>
                    <TextInput
                        className="w-[10rem] h-[2rem] bg-gray-300 rounded-[4px]
                     placeholder:text-[14px] py-[-12px] px-[2px]"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View className="flex-row gap-[10px]">
                    <Text className="text-[1.3rem] text-white">Age :</Text>
                    <TextInput className="w-[2.5rem] h-[2rem] bg-gray-300 
                    rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                        value={age}
                        onChangeText={setAge}
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <View className="flex-row mt-[12px] gap-[10px]">
                <Text className="text-[1.3rem] text-white">Address :</Text>
                <TextInput className="w-[15rem] h-[2rem] bg-gray-300 rounded-[4px]
                 placeholder:text-[14px] py-[-12px] px-[2px]"
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            <View className="flex-row justify-between mt-[12px]">
                <View className="flex-row gap-[10px]">
                    <Text className="text-[1.3rem] text-white">Phone :</Text>
                    <TextInput className="w-[8rem] h-[2rem] bg-gray-300 
                    rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType='numeric'
                    />
                </View>
                <View className="flex-row gap-[10px]">
                    <Text className="text-[1.3rem] text-white">Sex :</Text>
                    <TextInput className="w-[4rem] h-[2rem] bg-gray-300
                     rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                        value={sex}
                        onChangeText={setSex}
                    />
                </View>
            </View>
            <View className="flex-row mt-[12px] gap-[10px]">
                <Text className="text-[1.3rem] text-white">Email :</Text>
                <TextInput className="w-[17rem] h-[2rem] bg-gray-300 
                rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View className="flex-row mt-[12px] gap-[10px]">
                <Text className="text-[1.3rem] text-white">Remark :</Text>
                <TextInput className="w-[17rem] h-[2rem] bg-gray-300 
                rounded-[4px] placeholder:text-[14px] py-[-12px] px-[2px]"
                    value={remark}
                    onChangeText={setRemark}
                />
            </View>
            <TouchableOpacity
                onPress={handleDone}
                activeOpacity={0.8}
                className="w-[5rem] h-[2rem] bg-[#c1121f] rounded-md items-center justify-center absolute right-[10px] bottom-[10px]">
                <Text className="text-[1.2rem] font-[600] text-white">Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PersonalInfo;
