import { View, Text, ImageBackground, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Background4, ProfileIcon } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MAP_API } from "@env";

const DiscoverENG = () => {
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
							Discover
						</Text>
						<Text className="font-bold">the beauty today</Text>
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
						GooglePlacesDetailsQuery={{ fields: "geometry" }}
						placeholder="Search"
						fetchDetails={true}
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							console.log(details?.geometry?.viewport);
						}}
						query={{
							key: MAP_API,
							language: "en",
						}}
					/>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default DiscoverENG;
