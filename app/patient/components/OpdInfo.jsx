import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';

const opdDepartments = [
    "General Medicine",
    "Pediatrics (Child Health)",
    "Dermatology (Skin)",
    "ENT (Ear, Nose, and Throat)",
    "Ophthalmology (Eye)",
    "Orthopedics (Bone and Joint)",
    "Gynecology and Obstetrics ",
    "Cardiology (Heart)",
    "Neurology (Brain and Nervous System)",
    "Psychiatry (Mental Health)",
    "Dental OPD",
    "Pulmonology (Chest and Lungs)",
    "Urology ",
    "Gastroenterology ",
    "Nephrology (Kidneys)",
    "Endocrinology (Hormonal Disorders)",
    "Oncology (Cancer)",
    "Rheumatology ",
    "Physiotherapy and Rehabilitation",
    "Nutrition and Dietetics"
];

const OpdInfo = ({ onSubmit, onClose }) => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const handleSelect = (department) => {
        setSelectedDepartment(department);
        setModalVisible(false);
        onSubmit && onSubmit(department);
    };
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handleSelect(item)}
                className="py-3 border-b border-gray-200"
            >
             <Text className="text-gray-800">{item}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View className="h-[6rem] mt-[5px] relative bg-[#003049] rounded-md">
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                activeOpacity={0.8}
                className="bg-gray-100 m-[5px] h-[2.5rem] rounded-md justify-center items-center"
            >
                <Text className="text-[1.2rem]">
                  {selectedDepartment || "Select Department"}
                </Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide">
                <View className="flex-1 justify-center bg-[#003049] px-4">
                    <View className="bg-white rounded-lg max-h-[400px] p-4">
                        <FlatList
                            data={opdDepartments}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClose && onClose}
                className="w-[5rem] h-[2rem] bg-[#c1121f] rounded-md items-center justify-center absolute right-[10px] bottom-[10px]">
               <Text className="text-[1.2rem] font-[600] text-white">Close</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OpdInfo;