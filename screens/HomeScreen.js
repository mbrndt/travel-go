import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	SafeAreaView,
	SafeAreaProvider,
	SafeAreaInsetsContext,
	useSafeAreaInsets,
	initialWindowMetrics,
} from "react-native-safe-area-context";
import { HeroImage } from "../assets";

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className="bg-white-200 flex-1">
			{/* First Section */}

			<View className="flex-row px-6 mt-8 items-center space-x-2">
				<View>
					<Text className="text-yellow-400 text-3xl font-semibold ">
						astrid. go
					</Text>
				</View>

				<View>
					<Text className="text-gray-500 font-semibold">
						go out and discover
					</Text>
				</View>
			</View>

			{/* Second Section */}

			<View className="px-6 mt-8 space-y-3">
				<Text className="text-green-800 text-[42px]">Go out and</Text>
				<Text className="text-yellow-500 font-bold text-[38px]">
					Discover your new favourite places
				</Text>

				<Text className="text-gray-600 text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl
					velit. Sed eu nisl velit. Sed eu nisl velit. Sed eu nisl velit.
				</Text>
			</View>

			{/* Third Section */}

			<View className="w-[300px] h-[300px] bg-slate-400 rounded-full absolute bottom-10 -right-36"></View>
			<View className="w-[300px] h-[300px] bg-amber-700 rounded-full absolute -bottom-28 -left-36"></View>

			{/* Image Section */}

			<View className="flex-1 relative justify-center items-center">
				<Image
					source={HeroImage}
					className="w-3/4 h-4/5 object-cover rounded"
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
