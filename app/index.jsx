import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import '../global.css'; 
import { useRouter } from 'expo-router';

const SelectPage = () => {
    const [select, setSelect] = useState(null);
    const roles = ["Patient", "Doctor", "Admin"];
    const router = useRouter();
    const handlePress = () => {
        if(select === "Patient"){
            router.push("/patient")
        }else if(select === "Doctor"){
            router.push("/doctor")
        }else if( select === "Admin"){
            router.push("/admin")
        }
    }
    return (
        <View className="flex-1 items-center justify-center p-[1rem] bg-[#fdf0d5]">
            <Text className="text-[1.5rem] font-[700] mb-[12px]">Select the Mode</Text>
            <View className='h-[20rem] w-full rounded-md border-[1px] border-[#003049] 
            bg-white py-[1rem] px-[4px]'>
                {
                    roles.map((role, index) => (
                        <TouchableOpacity
                         activeOpacity={0.8}
                            key={role}
                            onPress={() => setSelect(role)}
                            className={`flex-1 h-[1.5rem] w-full px-[1rem] rounded-md items-center 
                            flex-row gap-[2rem] ${select === role ? "bg-[#003049]" : ""}`}
                        >
                            <View
                                className={`h-[1.6rem] w-[1.6rem] rounded-[50%] border-[1px]
                            border-[#003049] ${select === role ? "bg-[#c1121f]" : ""}`
                                }>
                            </View>
                            <Text className={`text-[1.3rem] font-[600] ${select === role ? "text-white" : "text-[#003049]"}`}>{role}</Text>
                        </TouchableOpacity>
                    ))

                }
            </View>
            <TouchableOpacity
               onPress={handlePress}
                activeOpacity={0.8}
                className='bg-[#003049] mt-[2rem]
            px-[1rem] py-[0.5rem] rounded-md w-full h-[3rem] justify-center
            items-center'>
                <Text className="text-white text-[1.5rem] font-[600]">Open</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectPage