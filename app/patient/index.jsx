import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import OpdInfo from './components/OpdInfo';
import DateTimeInfo from './components/DateTimeInfo';

const PatientPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [patientInfo, setPatientInfo] = useState({});
  const [showOPD, setShowOPD] = useState(false);
  const [opdInfo, setOPDInfo] = useState("");
  const [showTime, setShowTime] = useState(false);

  const handlePersonalInfo = (data) => {
    setPatientInfo(data);
    setShowInfo(false);
  };

  const handleOPDInfo = (data) => {
    setOPDInfo(data);
  }
  return (
    <View className="flex-1 bg-[#fdf0d5] p-[10px]">
      <Text className="text-[1.3rem] text-center mt-[-6px]">Welocome our online medico</Text>
      <Text className="text-[1.1rem] text-center mt-[-6px] mb-[12px] text-[#c1121f]">" Please fill up the required data "</Text>
      <TouchableOpacity
        onPress={() => setShowInfo(true)}
        activeOpacity={0.8}
        className="w-full h-[2.5rem] mt-[10px]
        bg-[#003049] rounded-md items-center justify-center">
        <Text className="text-[1.2rem] text-white ">Personal Info</Text>
      </TouchableOpacity>

      {showInfo && <PersonalInfo onSubmit={handlePersonalInfo} />}
      {/* {
        patientInfo && (
          <View className="flex-row justify-between">
            <Text className="text-[1.2rem]">Name : {patientInfo.name}</Text>
            <Text className="text-[1.2rem]">Age : {patientInfo.age}</Text>
            <Text className="text-[1.2rem]">Address : {patientInfo.address}</Text>
            <Text className="text-[1.2rem]">Phone : {patientInfo.phone}</Text>
            <Text className="text-[1.2rem]">Sex : {patientInfo.sex}</Text>
            <Text className="text-[1.2rem]">Email : {patientInfo.email}</Text>
            <Text className="text-[1.2rem]">Remark : {patientInfo.remark}</Text>
          </View>
        )
      } */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setShowOPD(true)}
        className="w-full h-[2.5rem] mt-[12px]
        bg-[#003049] rounded-md items-center justify-center">
        <Text className="text-[1.2rem] text-white ">Select OPD</Text>
      </TouchableOpacity>
      {
        showOPD && <OpdInfo
          onSubmit={handleOPDInfo}
          onClose={() => setShowOPD(false)}
        />
      }
      {
        //  opdInfo && (
        //     <View className="flex-row justify-between">
        //       <Text className="text-[1.2rem]">OPD : {opdInfo}</Text>
        //     </View>
        //   )
      }
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setShowTime(true)}
        className="w-full h-[2.5rem] mt-[12px]
        bg-[#003049] rounded-md items-center justify-center">
        <Text className="text-[1.2rem] text-white ">Set Date and Time</Text>
      </TouchableOpacity>
      {
        showTime && <DateTimeInfo />
      }
    </View>
  )
}

export default PatientPage