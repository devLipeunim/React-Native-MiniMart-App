import BackHeader from "@/components/headers/BackHeader";
import FrontHeader from "@/components/headers/FrontHeader";
import Wrapper from "@/components/Wrapper";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View } from "react-native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <SafeAreaView className="flex-1 bg-white">
        <FrontHeader />

        <BackHeader title="Your Profile" width={"33%"} />

        <View className="w-full bg-[#FBFBFB] mt-3"></View>
      </SafeAreaView>
    </Wrapper>
  );
};

export default Profile;
