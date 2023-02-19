import { View, Text, ImageBackground, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Background4, ProfileIcon } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAP_API } from "@env";

const DiscoverKOR = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<ImageBackground
			source={Background4}
			className="flex-1 justify-center"
			resizeMode="stretch"
		>
			<SafeAreaView className="flex-1 relative">
				<View className="flex-row items-center justify-between px-8 top-5">
					<View>
						<Text className="text-3xl text-gray-700 font-bold shadow-lg">
							아름다움을
						</Text>
						<Text className="font-bold">발견하세요</Text>
					</View>
					<View
						className="w-12 h-12 opacity-50 bg-gray-50 rounded-md items-center
                    justify-center shadow-lg"
					>
						<Image
							source={ProfileIcon}
							className="w-full h-full rounded-md object-cover "
						/>
					</View>
				</View>
				<View className="flex-row items-center bg-white mx-4 rounded-xl top-10 py-1 px-4 shadow-lg ">
					<GooglePlacesAutocomplete
						placeholder="Search"
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							console.log(data, details);
						}}
						query={{
							key: MAP_API,
							language: "kor",
						}}
					/>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default DiscoverKOR;
